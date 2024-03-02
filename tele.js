class Telephone {
    constructor() {
        this.phoneNumbers = new Set();
        this.observers = new Set();
    }

    // Method to add a new phone number
    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.add(phoneNumber);
        this.notifyObservers(`Added ${phoneNumber} to the phone book.`);
    }

    // Method to remove a phone number
    removePhoneNumber(phoneNumber) {
        if (this.phoneNumbers.has(phoneNumber)) {
            this.phoneNumbers.delete(phoneNumber);
            this.notifyObservers(`Removed ${phoneNumber} from the phone book.`);
        } else {
            this.notifyObservers(`${phoneNumber} not found in the phone book.`);
        }
    }
    

    // Method to dial a phone number
    dialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.has(phoneNumber)) {
            this.notifyObservers(`Now Dialing ${phoneNumber}...`);
            // Code for actually dialing the phone number would go here
        } else {
            this.notifyObservers(`Cannot dial ${phoneNumber}. Number not found in the phone book.`);
        }
    }

    // Method to add an observer
    addObserver(observer) {
        this.observers.add(observer);
    }

    // Method to remove an observer
    removeObserver(observer) {
        this.observers.delete(observer);
    }

    // Method to notify all observers
    notifyObservers(message) {
        for (let observer of this.observers) {
            observer.receiveNotification(message);
        }
    }
}

// Observer class
class PhoneBookObserver {
    receiveNotification(message) {
        console.log(`Phone Book User: ${message}`);
    }
}

// Example usage:
const myTelephone = new Telephone();
const phoneBookObserver = new PhoneBookObserver();

myTelephone.addObserver(phoneBookObserver);
myTelephone.addPhoneNumber("2347023232"); 
myTelephone.addPhoneNumber("9876543210");
myTelephone.dialPhoneNumber("2347023232"); // Should notify the observers
myTelephone.dialPhoneNumber("7777777777"); // Should notify the observers
myTelephone.removePhoneNumber("9876543210");
myTelephone.removeObserver(phoneBookObserver);
myTelephone.dialPhoneNumber("9876543210"); // It will not notify the observer