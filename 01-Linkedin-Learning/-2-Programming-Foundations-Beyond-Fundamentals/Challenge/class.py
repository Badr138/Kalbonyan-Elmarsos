class Attemdee:
    'Common base class for all attemdees'

    def __init__(self, name, tickets):
        self.name = name
        self.tickets = tickets

    def displayAttemdee(self):
        print('Name : {}, Tickets: {}'.format(self.name, self.tickets))

    def addTicket(self):
        self.tickets += 1
        print('{} tickets increased to {}'.format(self.name, self.tickets))

attendee1 = Attemdee('B. Giles', 2)
attendee2 = Attemdee('B. Giles', 1)

attendee2.addTicket()
attendee2.addTicket()

attendee1.displayAttemdee()
attendee2.displayAttemdee()