---
layout: default
---

# Advanced Calculus
## TN1410
### TU Delft; 10/02/2025-//2025

[TOC]

#### Resources
1. <a href="https://brightspace.tudelft.nl/d2l/le/content/682908/viewContent/3912024/View" target="_blank">https://brightspace.tudelft.nl/d2l/le/content/682908/viewContent/3912024/View</a> <a name='res1'></a> Formula sheet
2. <a href="https://brightspace.tudelft.nl/d2l/le/content/682908/viewContent/3912047/View" target="_blank">https://brightspace.tudelft.nl/d2l/le/content/682908/viewContent/3912047/View</a> Lesson 1, Laplace, solving DEs. 




### $\mathcal{L}$aplace Transformation

#### Definition
The Laplace transformation of $f(t)$ becomes $F(s)$ in this way:
$$
\begin{equation*}
    \mathcal{L}\{f(t)\}(s)=F(s)=\int_0^{\infty} e^{-st}f(t) \, \text{d}t
\end{equation*}
$$

We must know how to find the Laplace transformed of a function using the definition, but we do have a list of transformations for differential equations<sup style="color: black;"><b>[1](#res1)</b></sup>.

#### Characteristics

- $\mathcal{L}\{f_1(t)\}(s)=\mathcal{L}\{f_2\}(s) \implies f_1=f_2$*
- $\mathcal{L}\{c_1f_1(t)+c_2f_2(t)\}(s)=c_1\mathcal{L}\{f_1(t)\}(s)+c_2\mathcal{L}\{f_2(t)\}(s)$
- $\mathcal{L}\{f^{(n)}\}(s)=s^n\mathcal{L}\{f(t)\}(s)-s^{n-1}f(0)-\cdots-sf^{(n-2)}(0)-f^{(n-1)}(0)$

#### Applications

We can use Laplace transformations to solve differential equations<sup style="color: black;"><b></b></sup>. 

### Step function

#### Definition
of the Heaviside function $u_c$

$$
u_c(t)=\begin{cases} 
0, & 0 \leq t < c \\ 
1, & c \leq t < \infty
\end{cases}
$$

#### Theorem

$$
\begin{equation*}
    \mathcal{L}\{u_c(t)f(t)\}(s)=e^{-cs}\mathcal{L}\{f(t+c)\}(s)
\end{equation*}
$$

On the formula sheet we can find a slightly different version of the same theorem.

#### Observation

$$
\begin{align*}
    f(t)=\begin{cases}
        f_1(t)&a\leq t<b,\\
        f_2(t)&b\leq t<c,\\
        f_3(t)&c\leq t<d,\\
        \cdots
    \end{cases}
\end{align*}
$$

and we can write $f$ as following:

$f(t)=f_1(t)(u_a(t)-u_b(t))+f_2(t)(u_b(t)-u_c(t))+f_3(t)(u_c(t)-u_d(t))+\cdots$


#### Periodic functions

Assume $p(t)$ is a periodic function with period $T$.

Assume 
$$
f(t)=
\begin{cases} 
p(t), & 0\leq t<T\\
0, & otherwise
\end{cases}
$$

Then

$$
\begin{align*}
    p(t)&=\sum_{k=0}^{\infty}f(t-kT)u_{kT}(t),\\
    \mathcal{L}\{p(t)\}(s)&=F(s)\sum_{k=0}^{\infty}e^{-kTs}\stackrel{\text{s>0}}{=}\frac{F(s)}{1-e^{-sT}},\\
    \text{where,}\\
    F(s)&=\mathcal{L}\{f(t)\}(s)
\end{align*}
$$


