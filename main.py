def on_received_number(receivedNumber):
    pass
    def on_received_value(name, value):
        pass
    radio.on_received_value(on_received_value)
radio.on_received_number(on_received_number)

radio.set_group(10)