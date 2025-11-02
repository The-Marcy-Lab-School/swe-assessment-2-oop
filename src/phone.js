/* 
 Create a class hierarchy for phones with inheritance:

Phone class (parent):

Properties: brand, model, batteryLevel (starts at 100), password (private, must be a 4-character string)
Methods:
makeCall(number) - decreases battery by 5, logs "Calling {number}..."
charge() - sets battery back to 100, logs "Phone fully charged"
unlock(password) - returns “Phone unlocked” if the provided password matches the private password
iPhone class (child - inherits from Phone):

Additional property: iOSVersion
Override makeCall(number) to also log "Using FaceTime audio" before calling the parent's makeCall
New method: faceTime(name) - decreases battery by 2, logs "Facetiming {name}"
Test your code:

Create an iPhone and demonstrate:

Making a call (should show both the FaceTime audio message and regular call message).
Using the faceTime method.
Checking battery level after both actions.
Charging the phone.
*/

class Phone {
  #password;
  constructor(brand, model, batteryLevel, password) {
    this.brand = brand;
    this.model = model;
    this.batteryLevel = batteryLevel;
    this.#password = password;
  }

  makeCall(number) {
    this.batteryLevel -= 5;
    console.log(`Calling ${number}...`);
  }

  charge() {
    this.batteryLevel = 100;
    console.log("Phone fully charged");
  }

  unlock(password) {
    if (password === this.#password) {
      console.log("Phone unlocked");
      return true;
    }
    console.log("Invalid password");
    return false;
  }
}

class iPhone extends Phone {
  constructor(brand, model, batteryLevel, password, iOSVersion) {
    super(brand, model, batteryLevel, password);
    this.iOSVersion = iOSVersion;
  }

  makeCall(number) {
    console.log("Using FaceTime audio");
    super.makeCall(number);
  }

  faceTime(name) {
    this.batteryLevel -= 2;
    console.log(`Facetiming ${name}`);
  }
}

const iphone = new iPhone("Apple", "iPhone 15", 100, "1234", "17.0");
iphone.makeCall("1234567890");
console.log(iphone.batteryLevel);
iphone.faceTime("John");
console.log(iphone.batteryLevel);
iphone.charge();
console.log(iphone.batteryLevel);