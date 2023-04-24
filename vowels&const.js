//input value 
const x = 'hello'
function vowel_count(str1)
{
// defining vowels
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
// vowel count
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
 
  
  }
  return vcount;

}

console.log( x + " " + 'has' + " " + vowel_count(x) + " " + 'vowels');
