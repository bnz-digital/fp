const code = `function adjust (...args) {
  // If not all arguments supplied...
  if (args.length < 3) {
    // Return a function that remembers the current arguments,
    // takes more arguments, and calls adjust again with both
    return (...newArgs) => adjust(...args, ...newArgs)
  }
  
  // Once we have all three arguments, destructure them
  const [index, f, arr] = args
  
  // If the index is out of bounds, return the array unchanged
  if (index >= arr.length || index < -arr.length ) {
    return arr
  }
  
  return [
    ...arr.slice(0, index),     // Get the elements before the index
    f(...arr.slice(index)),     // Apply the function to the element at index
    ...(
      index === -1
        ? []                    // Handle the special case of -1
        : arr.slice(index + 1)) // Get the remaining elements, if any
  ]
}

const data = [0, 1, 2, 3, 4]

// We can apply arguments in any increments
console.log('adjust(2)(String)(data)', adjust(2)(String)(data))
console.log('adjust(2, String)(data)', adjust(2, String)(data))
console.log('adjust(2, String, data)', adjust(2, String, data))
console.log('adjust(2)(String, data)', adjust(2)(String, data))

// Calling with no arguments returns the function unchanged
console.log('adjust()()(2)()(String)()()(data)', adjust()()(2)()(String)()()(data))

// It works at different indexes
console.log('adjust(3, String, data)', adjust(3, String, data))
console.log('adjust(0, String, data)', adjust(0, String, data))
console.log('adjust(4, String, data)', adjust(4, String, data))

// It works with negative indexes
console.log('adjust(-1, String, data)', adjust(-1, String, data))
console.log('adjust(-4, String, data)', adjust(-4, String, data))

const adjustLast = adjust(-1)
const addTenToLast = adjustLast(x => x + 10)

console.log('addTenToLast(data)', addTenToLast(data))`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
