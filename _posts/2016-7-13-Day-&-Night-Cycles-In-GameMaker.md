---
layout: post
title: Day & Night Cycles In GameMaker
type: article
image: Assets/Blog Thumbnails/GameMaker Day & Night.gif
category: blogpost
tags: GameMaker, tutorial, game development
---

<figure>
	<img alt="Day & Night gif" src="/Assets/Blog Thumbnails/GameMaker Day & Night.gif"/>
	<figcaption>Day/Night example from Square Up</figcaption>
</figure>

###Hello!

This tutorial will go over how to make day/night cycles in GameMaker. First we need actual background images. Then we add them as Backgrounds. Last, we add code to make the images move.
Visit the [github repo](https://github.com/HexWithN/GameMaker-Day-And-Night-Cycle/ "Github Repo") for the complete source code.

Let's Begin!

###Getting the Images

<figure class="size200">
	<img alt="Sun Asset" src="/Assets/Blog Assets/Day & Night/sun.png"/>
	<figcaption><a target="blank" href="/Assets/Blog Assets/Day & Night/sun.png">Sun</a></figcaption>
</figure>
<figure class="size200">
	<img alt="Moon Asset" src="/Assets/Blog Assets/Day & Night/moon.png"/>
	<figcaption><a target="blank" href="/Assets/Blog Assets/Day & Night/moon.png">Moon</a></figcaption>
</figure>
<figure class="size200">
	<img alt="Clouds Asset" src="/Assets/Blog Assets/Day & Night/clouds.png"/>
	<figcaption><a target="blank" href="/Assets/Blog Assets/Day & Night/clouds.png">Clouds</a></figcaption>
</figure>

You can skip this section if your scene and images are ready.
The first step is to gather images. Sites such as <a target="blank" href="http://opengameart.org">OpenGameArt.org</a>,
<a target="blank" href="http://kenney.nl/">Kenney.nl</a>, and <a target="blank" href="http://game-icons.net/">Game-icons.net</a> can be great resources for 2D and 3D assets. If you use those sites, I recommend searching for images licensed
<a target="blank" href="https://creativecommons.org/publicdomain/zero/1.0/">CC0</a>,
<a target="blank" href="https://creativecommons.org/licenses/by/3.0/us/">CC-BY 3.0</a>, or
<a target="blank" href="http://opengameart.org/content/oga-by-30-faq">OGA-BY 3.0</a>.
We will need three images: a <a target="blank" href="/Assets/Blog Assets/Day & Night/sun.png">sun</a>, a <a target="blank" href="/Assets/Blog Assets/Day & Night/moon.png">moon</a>, and
<a target="blank" href="/Assets/Blog Assets/Day & Night/clouds.png">clouds</a>. I've provided the assets above free of charge, so there's no need to search.

Now that your images are ready, open your GameMaker project. Right click the Backgrounds folder and choose "Create Background". In the window that pops up, name your background and load the appropriate image.
Do this for the sun, moon, and clouds images.

###Adding the Backgrounds

<figure>
	<img alt="Adding Background Example GIF" src="/Assets/Blog Assets/Day & Night/AddingBackground.gif"/>
	<figcaption>Demonstration: Adding the Sun Background</figcaption>
</figure>

If you have not done so already, create a Room by right clicking on the Rooms folder.
Open your room and, in the Backgrounds tab, add the backgrounds we've just created. The backgrounds are in order from furthest to closest depth, so you should add the sun and moon first, then the clouds.
Here you can also set the background color, so set the color to <span class="bluText">a cute sky blue</span>.

For the sun and moon backgrounds, uncheck their 'Tile Hor.' and 'Tile Vert.' properties, so that there is just one sun/moon. Change their 'X:' and 'Y:' properties so that they suit where you want the sun/moon to be.
Leave 'Stretch' unchecked, and leave the 'Hor. Speed' and 'Ver Speed' at 0, since we'll be moving the backgrounds with code.

For the clouds, just uncheck 'Tile Vert.', and this leaves us with a repeating horizontal pattern of clouds from side to side. You can se the 'Hor. Speed' to make the clouds move, but we will be doing this in code anyway.

###Adding the Code

Now everything is in place for us to code the background. Our code will move the sun and moon down, move the clouds horizontally, and blend the background's color from morning blue to night purple.
But before we jump into code, click the green arrow and run your program. Looking good? It'll look great once everything's in motion :)

<figure>
	<img alt="Adding Code Example GIF" src="/Assets/Blog Assets/Day & Night/AddingExecuteCodeAction.gif"/>
	<figcaption>Demonstration: Adding the Code Action</figcaption>
</figure>

To run code, we need an object in the room. As we've done with the ackground and Room, right click the Objects folder to create an object. Remember to name objects appropriately.
This object will control our background, so let's call it something like "obj_backgroundController".

Open your backgroundController object and click the 'Add Event' button. We're going to initialize variables first, so let's start with a Create event.
On the right side, you'll see a bunch of sideways tabs click the 'control' tab, and right-click the execute code action.
It's first one under code that looks like a dog-eared page. A text window will pop up. Here's where we start coding.

###Coding the Cycle

####Create Event

To code the cycle we need to know what we're changing. We're changing the position of the sun, moon, and clouds backgrounds, and we're changing the background color.
We'll also need to know at what speed the sun and moon will move, at what speed the clouds will fly, and what the day and night colors should be.

	// Use the values from the Backgrounds we made earlier

	sunPositionX = 150; // Where the sun will appear, horizontally
	sunPositionY = 50; // Where the sun will appear, vertically

	moonPositionX = 150; // Where the moon will appear, horizontally
	moonPositionY = -room_height + 50;
	// ^ The same as the sun's position, but offset by the height of the room

	dayCycleSpeed = 2; // The sun and moon move at 2 pixels per frame

	cloudPositionX = 0;
	cloudPositionY = -50; // -50 offset just looks a bit better imo

	cloudSpeed = 5; // The clouds move at 5 pixels per frame

	dayColor = make_colour_rgb(80, 200, 255); // Day color
	// ^ If you have a color in mind, use this function to make it
	nightColor = c_purple; // Night color
	currentBGColor = dayColor; // Set the current background color to day time

And with that, we're ready to move on to the step event. Click the green check mark on the code window, and add a normal Step event to our background controller, the same way you added the Create event.
Add the Execute Code action the same way you did before too.

####Step Event

This event will run every frame, and it's what will make our scene dynamic. Here is where we'll actually move the background positions and change the background color.

	// We're using the variables we just set in the Create event

	// In GameMaker, the backgrounds' properties are in an array
	// Remember which index corresponds to which background.
	// Sun is on 0, moon is on 1, and the clouds is on 2

	//Now we're going to move the backgrounds by adding the respective speeds
	sunPositionY += dayCycleSpeed;
	moonPositionY += dayCycleSpeed;

	//And set the respective background positions
	background_x[0] = sunPositionX;
	background_y[0] = sunPositionY;

	background_x[1] = moonPositionX;
	background_y[1] = moonPositionY;

	cloudPositionX += cloudSpeed;

	background_x[2] = cloudPositionX;
	background_y[2] = cloudPositionY;

	// Here we check the positions of our sun and moon
	// If they are moving off the screen, reset them to the other side
	if(background_y[0] > room_height)
		sunPositionY = -room_height;
	if(background_y[1] > room_height)
		moonPositionY = -room_height;

	// Now for the colors. We interpolate user merge_color
	// Merge color is an interpolating function
	// The first two paramaters are the colors to merge
	// The last parameter is how farge to merge them on a scale from 0-1
	// We'll make that last parameter based on the position of the sun
	currentColor = merge_color(dayColor, nightColor, abs(sunPositionY)/room_height);
	// When sunPositionY is positive, it is being increased by speed
	// Remember, when the sun's Y position is at room_height, it is reset to negative room_height
	// sunPositionY is still being added to at this point
	// That brings the number closer to 0 while it is negative
	// abs(sunPosition) removes the negative sign
	// abs makes the value of sunPositionY like a spring, going back and forth from 0 - room_height
	// thus, abs(sunPositionY)/room_height is always a number from 0 - 1

	//Finally, we set the background color to our current color variable
	background_color = currentColor;

###Fin!

<figure>
	<img alt="Adding BG Controller GIF" src="/Assets/Blog Assets/Day & Night/AddingBGControllerObject.gif"/>
	<figcaption>Demonstration: Adding the BG Controller Object</figcaption>
</figure>

That's it for the code! There's just one last thing to do. That is, open your room, go to the objects tab, and add our background controller object to the room.
Now, once you hit play, you will have a live scene with a sun, moon, clouds, and background day/night action.

<figure>
	<img alt="Finished Day/Night Cycle" src="/Assets/Blog Assets/Day & Night/Finished Product.gif"/>
	<figcaption>The Finished Product</figcaption>
</figure>

###Tips & Tricks

<figure class="size200">
	<img alt="Fade Asset" src="/Assets/Blog Assets/Day & Night/fade.png"/>
	<figcaption><a target="blank" href="/Assets/Blog Assets/Day & Night/clouds.png">Background Fade</a></figcaption>
</figure>

+	Add the fade image provided above as a background. Check the 'Stretch' option on it too. See how a dynamic gradient makes it look so much better?
+	If you added the fade background, add this code to your background controller's step event:

		background_blend[3] = merge_color(c_ltgray, c_black, abs(sunPositionY)/room_height);

	See how the change in gradient really affects the mood?
+	The colors I chose were basic day/night colors. Your day/night colors should more accurately reflect the mood of your game. Dark and brooding? Happy and playful? Etc.
+	Change the directions of your backgrounds by making the speeds positive or negative
+	Have fun / stay positive

Questions? Send an email or leave a comment!
<br/>
Email: nqshabazz@gmail.com