const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

   

    each: function(collection, callback) {
      if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
          callback(collection[i], i, collection)
        }
      }
      else {
        let keys = Object.keys(collection)
        for (let i = 0; i < keys.length; i++){
          callback(keys[i], i, keys)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = []
      if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
          newCollection.push(callback(collection[i], i, collection))
        }
      }
      else {
        let keys = Object.keys(collection)
        let key
        for (let i = 0; i < keys.length; i++){
          key = keys[i]
          newCollection.push(callback(collection[key], key, collection))
        }
      }
      return newCollection


    },

    reduce: function(collection, callback, accumulator = undefined) {
      let i
      let acc
      if (accumulator){
       i = 0
       acc = accumulator
      }
      else{
        i = 1
        acc = collection[0]
      }
      for(; i<collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc
    },

    find: function(collection, callback) {
      let test
      for (let i = 0; i < collection.length; i++){
        if (callback(collection[i])){
          return collection[i]
        }
      }
      return test
    },

    filter: function(collection, callback) {
      let array = []
      for (let i = 0; i < collection.length; i++){
        if (callback(collection[i])){
          array.push(collection[i])
        }
      }
      return array
    },

    size: function(collection, callback) {
      let count = 0
      if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
          count ++
        }
      }
      else {
        let keys = Object.keys(collection)
        for (let i = 0; i < keys.length; i++){
          count ++
        }
      }
      return count
    },

    first: function(collection, num) {
      let array = []
      if (!num){
        return collection[0]
      }
      else {
        for (let i = 0; i < num; i++){
          array.push(collection[i])
        }
        return array
      }
    },

    last: function(collection, num) {
      let array = []
      if (!num){
        return collection[collection.length-1]
      }
      else {
        for (let i = num; i > 0; i--){
          array.push(collection[collection.length-i])
        }
        return array
      }
    },

    compact: function(collection) {
      let newArray = []
      for(let i =0; i<collection.length; i++){
        if(collection[i] != false && collection[i] != null && !Number.isNaN(collection[i]) && collection[i] != undefined){
          newArray.push(collection[i])
        }
      }
      return newArray
    },

    sortBy: function(collection, callback) {
      // let newArry = collection
      // let sortedArray = []
      // let key
      // let value
      // for(let i = 0; i < collection.length; i++){
      //   if(collection[i])
      // }
      //take an element from array 1
      //compare it with last element of array 2
        //if greater, push
        // if lesser,
        // repeat minus 1
        //insert into array
      collection.sort(callback(collection))
    },

    flatten: function(array, shallow=false){
      let flattened_array = array
      if(shallow == false){
        let arrays = true
        let embedded_array
        let index
        while(arrays == true){
          for(let i=0; i < flattened_array.length; i++){
            if(Array.isArray(flattened_array[i])==true){
              embedded_array = flattened_array[i]
              index = i
              flattened_array.splice(i, 1)
              embedded_array.forEach(element => {
                flattened_array.splice(index, 0, element)
                element += 1
              });
              index = undefined
              embedded_array = undefined
              i = flattened_array.length
              arrays = true
            }else{
              arrays = false
            }
          }
        }
      }else{

      }
      return flattened_array
    },

    uniq: function(collection, isSorted = false, callback) {
      let newArry = []
      if(isSorted === true){
        newArray.push(collection[0])
        for(let i = 1; i < collection.length; i++){
          if(collection[i] !== collection[i-1])
          newArray.push(collection[i])
        }
      }
      else{

      }
    return newArry
    },

    keys: function(object) {
      let keys = []
      for (const [key, value] of Object.entries(object)) {
        keys.push(key)
      }
      return keys
    },

    values: function(object) {
      let values = []
      for (const [key, value] of Object.entries(object)) {
        values.push(value)
      }
      return values
    },

    functions: function(){
      let names = fi.keys(fi)
      return names.sort(names)
      
    }


  }
})()

fi.libraryMethod()
