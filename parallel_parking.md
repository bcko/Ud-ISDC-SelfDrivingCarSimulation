
# Joy Ride - Part 3: Parallel Parking
In this section you will write a function that implements the correct sequence of steps required to parallel park a vehicle.

**Note** for this segment the vehicle's maximum speed has been set to just over 4 mph. This should make parking a little easier.


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
# Write the park function so that it actually parks your vehicle.

from Car import Car
import time

def park(car):
    #  currently it just drives back and forth
    #  Note that the allowed steering angles are
    #  between -25.0 and 25.0 degrees and the 
    #  allowed values for gas are between -1.0 and 1.0
    
    # inspired from The "S" Method (http://teendriving.com/driving-tips/parking/)
    
    car.gas(-.1)
    time.sleep(.5)
    
    car.steer(25.0)
    time.sleep(3)
    
    car.steer(0)
    time.sleep(2)
    
    car.steer(-25.0)
    time.sleep(1)
    
    car.gas(.1)
    time.sleep(.5)
    car.gas(0)
    
    car.steer(0)
    car.gas(.2)
    car.steer(10)
    time.sleep(1.5)
    car.gas(-.2)
    time.sleep(1)
    car.gas(.1)
    time.sleep(0.5)
    car.gas(0)

car = Car()
park(car)
```

























# Submitting this Project!
Your parallel park function is "correct" when:

1. Your car doesn't hit any other cars.
2. Your car stops completely inside of the right lane.

Once you've got it working, it's time to submit. Submit by pressing the `SUBMIT` button at the lower right corner of this page.
