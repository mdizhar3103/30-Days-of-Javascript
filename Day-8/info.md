### Collections- Maps
- Key-value pairs
- Keeps the original Insertion order
- Any value (objects and primitive values) may be used as either a key or a value
- map.set(key, value)
- Properties and Methods for Maps
    - Properties: size
    - Methods: clear, delete, get, set, has, forEach, entries, Keys, values

**Maps VS Objects**
| Object | Map | 
|--------|-----|
|Key must be simple datatypes| Key can be any data type|
| Integers| Object|
| Strings| Array | 
|Symbols| Function|
| No insertion order | Insertion order is same |

*Map is inherited from Object but not vice-versa*

***Creating:***
- Object:
    - var obj = {};
    - var obj = new Object();
    - var obj = Object.create(null);
- Map
    - var map = new Map();


***Getting:***
- Object:
    - obj.id
    - obj['id']
- Map:
    - map.get(id)

***Checking:***
- Object:
    - isExist = 'id' in obj
- Map:
    - map.has(id)

***Adding:***
- Object:
    - obj.name = 'foo';
    - obj['name'] = 'bar';
- Map:
    - map.set('name', 'foo bar'); 

### WeakMap 
- Keys must be objects
- Objects are held "weakly"
- Not iterable 
- Garbage collected
- Are not enumerable (not counted)
- Methods: delete, get, set, has


### Typed Arrays
Array-like objects that provide a mechanism for accessing raw binary data.
- Faster performance
- Strictly controlled data
- APIs that support typed array, APIs like WebGL, Canvas, WebaudioAPI, XMLHttpRequests, Fetch API, Web Sockets, Web Workers, Media Source API, File APIs, etc
- Typed Array Structure: Is creating an array buffer by defining size in bytes, along with defining views of uint8Array, uint16Array, uint32Array, Float64Array, int8Array, int16Array, int32Array, etc. Each views has specific number range beyond that we can't go.


|Standard Arrays| Typed Arrays|
|---------------|-------------|
| Accept most data types| Restricted data types|
| Standard variable storage| Binary Data |
| Standard processing | Faster processing |
| - | Once in view, act like arrays|
| - | Native APIs|
