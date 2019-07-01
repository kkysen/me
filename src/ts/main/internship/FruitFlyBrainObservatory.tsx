import * as React from "react";
import {makeSimpleInternship} from "./SimpleInternship";

export const FruitFlyBrainObservatory = makeSimpleInternship({
    name: "FruitFlyBrainObservatory",
    prettyName: "FFBO - Fruit Fly Brain Observatory",
    time: "Summer 2017",
    url: {
        abstract: "https://federalreporter.nih.gov/Projects/Details/?projectId=801626",
        website: "http://fruitflybrain.org",
    },
    img: {
        thumb: "", // TODO
        main: "", // TODO
    },
    AbstractAndRole: () => <>
        To create better artificial intelligence, the best resource we have is our own brain.
        By understanding how our own brain functions and what makes it so intelligent,
        we may be able to apply these techniques to the AIs we create.
        However, the human brain is amazingly complex with over 100 billion neurons,
        and currently, we understand very little of how it works.
        Thus, it is extremely useful to begin by studying the fruit fly brain,
        a much smaller, simpler brain of only 100,000 neurons
        that is still capable of advanced cognition beyond what we currently understand.
        In creating simulations of the fruit fly brain and its many neural circuits,
        it is vitally important to run real-time simulations that capture real-world
        and analyze it as a fly would.
        This allows us to evaluate how our model performs in the same situation as a real fruit fly.
        The perfect candidate for this is a fruit fly robot that can sense and behave like a real fruit fly.
        While simulating the physical capabilities of the fruit fly is also important,
        simulating the sensory input and behavior is paramount, and is focused on in this project.
        <br/>
        My role in this project was to implement the vision system of the fruit fly robot.
        To do so, I had to simulate the grid-like, blurred vision of the fruit fly’s compound eyes,
        which was accomplished by using a convolution of the image frame with a gaussian kernel,
        in addition to simulating the same elementary motion detection algorithms
        that have been recently discovered in the fruit fly brain.
        The entire vision system was not implemented,
        but since motion detection and the fly’s evasive response is
        one of the fruit fly’s most used neural pathways, this was deemed sufficient for most purposes.
        Both the convolution and motion detection algorithms are highly parallelizable,
        as are the actual neural pathways in the brain,
        so full advantage was taken of the massive parallel processing power of the GPU,
        specifically the embeddable NVIDIA Jetson TX2.
        A major challenge in this was the real-time demand,
        since the camera ran at 60 frames per second (ideally, this would be set at 300 FPS,
        because the fruit fly’s compound eye can see at a much higher rate,
        but the camera used could not attain 300 FPS),
        meaning all the image processing, convolution, and motion detection
        had to be performed in 1/60th of a second.
        Consequently, the program had to be heavily optimized for the GPU,
        performing copy elision so that the raw image was sent directly to the GPU
        and ensuring the parallel algorithms achieved maximum cache efficiency and shared memory use,
        most loops were unrolled to reduce instruction overhead,
        and striding all memory accesses to reduce shared memory bank conflicts.
        <br/>
        After 3 weeks of learning Cuda GPU programming using C, C++, and Python
        and the neural “architecture” of the fruit fly brain,
        and after 4 weeks working on this project, the vision system of the fruit fly robot was complete.
        It is now able to process video at 60 frames per second and detect elementary motion
        after going through the compound vision filter and then make the appropriate response.
        It is able to track and follow a moving object,
        as well as speed away when an object approaches too quickly,
        and thus is able to mimic the behavior of the fruit fly.
    </>,
});
