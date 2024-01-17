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

synchronized 关键字能够确保同一时刻只能有一个线程处于同步块或同步方法中，从而保证了一个线程对共享变量的修改对另一个线程可见。

### 线程访问同步块的过程

```java
Object object = new Object();
synchronized (object) {
    // do something
}
```

![线程获取对象监视器以访问同步块](./image/线程获取对象监视器以访问同步块.png)

任意线程对 Object 的访问，首先要获得 Object 的监视器。如果获取失败，线程进入同步队列，线程状态变为 BLOCKED。当访问 Object 的前驱释放了锁，则该释放操作唤醒阻塞在同步队列中的线程，使其重新尝试对监视器的获取。

### 等待 / 通知机制

![等待 / 通知的相关方法](./image/等待-通知的相关方法.png)


<Share colorful services="qrcode,telegram,twitter" />