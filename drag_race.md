
# Joy Ride - Part 1: Drag Race

The goal here is to get you familiar with how to control the simulated car with code. To get started:

1. Run the cell below this one by pressing `Ctrl + Enter`
2. Click the button that says "Launch Car Simulator". A new tab should open in your browser.
3. Arrange your tabs as shown below so that this notebook is on one side of the screen and the simulator is on the other. ![code next to simulator](https://i.imgur.com/zhPjERi.jpg)
4. Run the cell (`Ctrl + Enter`) marked "CODE CELL". The car in the simulator should start moving. You should notice a problem...
5. Press the **Reset** button in the simulator and then modify the code in the code cell. You should only need to change one line of code...
6. When you think you've fixed the problem, run the code cell again. Did the car make it over the trees?


```python
%%HTML
<button id="launcher">Launch Car Simulator</button>
<script src="setupLauncher.js"></script>
```


<button id="launcher">Launch Car Simulator</button>
<script src="setupLauncher.js"></script>



```python
# CODE CELL
# 
# This is the code you should 
# edit and run to control the car.

from Car import Car # you don't need to change this line of code...

def jump(car):
    # TODO - make modifications in this function
    #   so that your car makes it safely over the trees.
    
    car.steer(0.0) # any value between -25 and 25 works here for
                   # steering angle (in degrees)
        
    car.gas(1.0)   # any value between -1.0 (full reverse) and 
                   # 1.0 (full throttle) works here
    
car = Car()  
jump(car)
```




