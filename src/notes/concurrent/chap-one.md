---
title: 第一章 Java 并发编程的基础
order: 1
isOriginal: true
category:
  - 笔记
tag:
  - 并发编程
comment: true
---

## 线程简介

### 什么是线程

现代操作系统在运行一个程序时，会为其创建一个进程。例如，启动一个 Java 程序，操作系统就会创建一个 Java 进程。线程也叫轻量级进程（`light Weight Process`），是现代操作系统调度的最小单元。在一个进程里可以创建多个线程，处理器在这些线程上高速切换，让使用者感觉到这些线程是在同时执行。

### 为什么要使用多线程

- **充分利用多核处理器和多个 CPU**

使用多线程技术，将计算逻辑分配到多个处理器核心上，就会显著减少程序的处理时间，并且随着更多处理器核心的加入而变得更有效率。

- **更快地响应时间**

响应用户请求的线程能够尽可能快地处理完成，缩短了响应时间，提升了用户体验。

- **好的编程模型，使开发人员更专注于问题的解决**

Java 为多线程编程提供了良好、考究并且一致的编程模型，使开发人员能够更加专注于问题的解决。

### 线程的状态

![Java 线程的状态](./image/Java线程的状态.png)

![Java 线程状态变迁](./image/Java线程状态变迁.png)

### Daemon 线程

Daemon 线程是一种支持型线程，因为它主要被用作程序中后台调度以及支持性工作。这意味着，**当一个 Java 虚拟机中不存在非 Daemon 线程的时候，Java 虚拟机将会退出**。可以通过调用 Thread.setDaemon(true) 将线程设置为 Daemon 线程。

```java
public class Daemon {
    public static void main(String[] args) {
        Thread thread = new Thread(new DaemonRunner(), "DaemonRunner");
        thread.setDaemon(true);
        thread.start();
        // main 方法执行完毕，此时没有非守护线程，虚拟机退出
    }

    static class DaemonRunner implements Runnable {
        @Override
        public void run() {
            try {
                SleepUtils.second(10);
            } finally {
                // finally 块中的代码并没有执行
                System.out.println("DaemonThread finally run.");
            }
        }
    }
}
```

::: warning

- Daemon 属性需要在启动线程之前设置，不能在启动线程之后设置。
- 在构建 Daemon 线程时，不能依靠 finally 块中的内容来确保执行关闭或清理资源的逻辑。

:::

## 线程间通信

::: tip synchronized

synchronized 关键字能够确保同一时刻只能有一个线程处于同步块或同步方法中，从而保证了一个线程对共享变量的修改对另一个线程可见。

:::

先来看一个不使用 synchronized 的情况下，多线程同时修改共享变量的案例：

```java
public class Counter {

    private int count = 0;

    public void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }

    public static void main(String[] args) {
        Counter counter = new Counter();

        Thread thread1 = new Thread(() -> {
            for (int i = 0; i < 100000; i++) {
                counter.increment();
            }
        }, "thread-1");

        Thread thread2 = new Thread(() -> {
            for (int i = 0; i < 100000; i++) {
                counter.increment();
            }
        }, "thread-2");

        thread1.start();
        thread2.start();

        try {
            // 等待 thread1 执行完，才返回
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        System.out.println(counter.getCount());
    }
}
```

运行结果：

```text
138076
```

我们期望的是，在对共享变量 count 进行 200000 次累加后，结果会变成 200000，而实际每次执行的结果都不一样，且都小于我们的期望值。

如何避免多线程同时修改共享变量而导致的数据不一致问题呢？这里我们对 increment() 方法加上 synchronized 关键字：

```java
public synchronized void increment() {
    count++;
}
```

运行结果：

```text
200000
```

### 线程访问同步块的过程

```java
Object object = new Object();
synchronized (object) {
    // do something
}
```

![线程获取对象监视器以访问同步块](./image/线程获取对象监视器以访问同步块.png)

任意线程对 Object（Object 由 synchronized 保护）的访问，首先要获得 Object 的监视器。如果获取失败，线程进入同步队列，线程状态变为 BLOCKED。当访问 Object 的前驱（获得了锁的线程）释放了锁，则该释放操作唤醒阻塞在同步队列中的线程，使其重新尝试对监视器的获取。

### 等待 / 通知机制

![Object 的等待 / 通知相关方法](./image/等待-通知的相关方法.png)

::: warning 调用 wait()、notify() 及 notifyAll() 时注意细节

1. 使用 wait()、notify() 和 notifyAll() 时，需要**先对调用对象加锁**。

2. 调用 wait() 方法后，线程状态由 RUNNING 变为 WAITING，并将当前线程放置到对象的等待队列。

3. notify() 或 notifyAll() 方法调用后，等待线程依旧不会从 wait() 返回，需要调用 notify() 或 notifAll() 的线程释放锁之后，等待线程才**有机会**从 wait() 返回。

4. **notify() 方法将等待队列中的一个等待线程从等待队列中移到同步队列中，而 notifyAll() 方法则是将等待队列中所有的线程全部移到同步队列**，被移动的线程状态由 WAITING 变为 BLOCKED。

5. **从 wait() 方法返回的前提是获得了调用对象的锁**。

:::

![wait()、nofify() 运行过程](./image/Wait-Notify运行过程.png)

### 等待 / 通知的经典范式

等待方：
```java
synchronized (对象) {
    while (条件不满足) {
        对象.wait();
    }
    对应的处理逻辑
}
```

通知方：
```java
synchronized (对象) {
    改变条件
    对象.notifyAll();
}
```

### thread.join() 的使用

如果一个线程 A 执行了 thread.join() 语句，其含义是：当前线程 A 等待 thread 线程终止之后才从 thread.join() 返回。

![](./image/website/waiting-for-you.png)

为了方便记忆，你也可以理解成“**我等你（执行完）**”，源码如下：

```java
/**
 * Waits for this thread to die.
 * （我等你执行完）
 */
public final void join() throws InterruptedException {
    join(0);
}

public final synchronized void join(long millis)
        throws InterruptedException {
    long base = System.currentTimeMillis();
    long now = 0;

    if (millis < 0) {
        throw new IllegalArgumentException("timeout value is negative");
    }

    if (millis == 0) {
        // 你还在执行吗？
        while (isAlive()) {
            // 还在执行的话，那我无限等下去，反正你执行完了会调用自身的 notifyAll() 方法
            // 将我唤醒，此后我将继续前行
            wait(0);
        }
    } else {
        while (isAlive()) {
            long delay = millis - now;
            if (delay <= 0) {
                break;
            }
            wait(delay);
            now = System.currentTimeMillis() - base;
        }
    }
}

```

通过分析 join() 方法的源码，可以发现正好符合“等待 / 通知”经典范式的“等待方”，即：加锁（这里的锁是被执行 join() 方法的线程对象）、条件循环和处理逻辑 3 个步骤。

<Share colorful services="qrcode,telegram,twitter" />