/**
 Complete the solution so that it reverses the string passed into it.
 Example:
 
'world'  =>  'dlrow'
'word'   =>  'drow'
 */

//challenge 5  Reversed Strings
function solution(str){
  
    if(str.length == 1){
      return str
    }else{
      
      let list = str.split("")
      
      let left = 0
      let right = str.length - 1
      
      while(left <= right){
        let temp = list[left]
        list[left] = list[right]
        list[right] = temp
        
        left += 1
        right -= 1
    }
      return list.join("") 
    }
}
