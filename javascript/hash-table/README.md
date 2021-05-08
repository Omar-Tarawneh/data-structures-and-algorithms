# Hashtables

Hashtables are a data structure that utilize key value pairs. This means every Node or Bucket has both a key, and a value.

The basic idea of a hashtable is the ability to store the key into this data structure, and quickly retrieve the value. This is done through what we call a hash. A hash is the ability to encode the key that will eventually map to a specific location in the data structure that we can look at directly to retrieve the value.

## Challenge

Implement a Hashtable with the following methods:

- add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- get: takes in the key and returns the value from the table.
- contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
- hash: takes in an arbitrary key and returns an index in the collection.

## Approach & Efficiency

- add: Time Complexity -> O(1) Space Complexity -> O(1).
- get: Time Complexity -> O(1) Space Complexity -> O(1).
- contains: Time Complexity -> O(1) Space Complexity -> O(1).
- hash: Time Complexity -> O(L) Space Complexity -> O(1) // L is the length of the key.

## API

- `add(key, value)`:This method should hash the key, and add the key and value pair to the table, handling collisions as needed.

- `get(key)`: takes in the key and returns the value from the table.
- `contains(key)`: takes in the key and returns a boolean, indicating if the key exists in the table already.
- `hash(key)`:takes in an arbitrary key and returns an index in the collection.
