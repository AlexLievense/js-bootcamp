let restaurant = {
    name: 'Smullers',
    guestCapacity: 10,
    guestCount: 0,
    checkAvailability: function (partySize) {
        return this.guestCapacity - this.guestCount - partySize >= 0
    },
    seatParty: function (partySize) {
        this.guestCount += partySize
    },
    removeParty: function (partySize) {
        this.guestCount -= partySize
    }
}

console.log(restaurant.checkAvailability(10))
restaurant.seatParty(4)
console.log(restaurant.guestCount)
restaurant.removeParty(2)
console.log(restaurant.guestCount)