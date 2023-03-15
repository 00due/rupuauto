let cn = 0
let spd = 0
radio.setGroup(10)
basic.showLeds(`
    # . # . #
    . # # # .
    # . # . #
    . # # # .
    # . # . #
    `)

radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber === 0) {
        if (cn !== 0) {
            cn = 0
            spd = 0
            kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
            while (spd < 50) {
                kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, spd)
                spd += 1
                basic.pause(10)
            }
        }
    }
    if (receivedNumber === 1) {
        if (cn !== 1) {
            cn = 1
            spd = 0
            kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
            while (spd < 50) {
                kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, spd)
                spd += 1
                basic.pause(10)
            }
        }
    }
    if (receivedNumber === 2) {
        if (cn !== 2) {
            cn = 2
            spd = 0
            while (spd < 50) {
                kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, spd)
                kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, spd)
                spd += 1
                basic.pause(10)
            }
        }
        
    }
    if (receivedNumber === 3) {
        if (cn !== 3) {
            cn = 3
            spd = 0
            kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
            kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
        }
        
    }
    if (receivedNumber === 4) {
        if (cn !== 4) {
            cn = 4
            spd = 0
            while (spd < 50) {
                kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, spd)
                kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, spd)
                spd += 1
                basic.pause(10)
            }
        }
    }
}   
)

