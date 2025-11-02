# Section 2 — System Design

Loom Link:
UML Diagram: https://docs.google.com/drawings/d/1XP1zCJ3pcQrH8RXCivdwbGDuLF-RalR0KUE8tjuE_yY/edit?usp=sharing

## Notes:

In this design a `Shelter` instance is able to track pets currently in the shelter by adding a `Pet` instance through the `addPet` method which adds the pet to the `pets` array. When a pet is adopted, it can track the new `AdoptionRecord` instance through the `recordAdoption()` method which adds the record to the `adoptionRecords` array. 

The `AdoptionRecord` has a reference to the `Pet` instance being adopted so the `Shelter` instance is able to find the `Pet` by its `petId` using the `findPetById` method and remove it from the `pets` array when a new adoption is being recorded.