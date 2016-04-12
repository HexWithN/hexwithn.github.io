---
layout: post
title: Basic Concepts
type: article
specificSubject: Graphical Mathematics
image: Assets/Game Thumbnails/HexNum0.gif
category: blogpost
tags: Graphical Mathematics, Math Tutorial, Math, Points and Lines, Local Coordinates, Global Coordinates
desc: This tutorial will introduce some of the basic concepts of graphical math. That is, points & arrays, and local vs. global coordinates.
---
#### Introduction

Graphical Mathematics is like algebra and trigonometry with just a few new concepts that make it graphical. This study's range spans from point and vector manipulation to 3D computations. But do not be alarmed! This blog series will cover the basics, only. Furthermore, I will explain the concepts as intuitively as possible.

<br/>
Let's Begin!

#### Graphs and Arrays

Your computer screen is a graph. If you are viewing this on a screen, you are actually looking at an array of pixels. An image on said screen can be represented by an array \\( n \times m \\) of pixels, where \\( n \\) is the width in pixels and \\( m \\) is the height in pixels. A point in this array \\( n \times m \\) is written in the format \\( (x, y) \\).

<figure class="mathEx">
	<img alt="logo" src="/Assets/Graph Math/pic0.png"/>
	<figcaption>
		Describe this array in the format n x m
		<p> 5 x 3 | 5 columns by 3 rows </p>
		What is the location of k?
		<p> (0, 0) | (Row 0, Column 0) </p>
		What is the location of e?
		<p> (4, 2) | (Row 4, Column 2) </p>
	</figcaption>
</figure>

#### Local and Global Coordinates

Since we are using \\( n \times m \\) to represent an image on the screen, let \\( N \times M \\) represent the screen itself. If you are using a PC, your screen might have a resolution of \\( 1366 \times 768 \\) or \\( 1920 \times 1080 \\). This would be the array of pixels on the screen.

In graphical terms, any point described relative to the image \\( n \times m \\) would be *local coordinates* while any point described relative to the screen \\( N \times M \\) would be *global coordinates*.

<figure class="mathEx">
	<img alt="logo" src="/Assets/Graph Math/pic1.png"/>
	<figcaption>
		What are the global coordinates of the red dot?
		<p> (4, 3) </p>
		Describe the grey box in the format n x m
		<p> 3 x 2 </p>
		What are the global coordinates of the red dot relative to the grey box?
		<p> (3, 2) </p>
	</figcaption>
</figure>

#### Understanding it Algebraically

Keeping the above example in mind, let's understand it more algebraically.

First, let's store the red dot's *local* position \\( (3, 2) \\) as variables \\( (u\_1, u\_2) \\).
Then, let's store the *global* position of the lower-left corner of the box \\( (1, 1) \\) as  \\( (min\_1, min\_2) \\).
Finally, we'll store the global position of the red dot  \\( (4, 3) \\) as  \\( (x\_1, x\_2) \\).

The global coordinates of the red dot can now be expressed in terms of it's local coordinates within the box:

$$ x\_1 = min\_1 + u\_1 $$
$$ x\_2 = min\_2 + u\_2 $$

#### Conclusion

We have reviewed arrays, points, and local & global coordinates. Not only do we understand the concepts geometrically, but we can also describe them algebraically. We now know enough to move on to aspect ratios and the like in the next post.

If you've looked through the settings of your computer, tv, or even a game, you may have seen aspect ratio before. Don't worry, it'll be simple !

