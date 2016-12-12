var grade = 26

switch (true) { //----> can always change the switch statement to fit 
  case (grade >= 75):
    console.log('A')
	  break
  case (grade >= 65):
	  console.log('B')
	  break
  case (grade >= 51):
    console.log('C')
    break
  case (grade <= 49):
    console.log('fail')
    break
  case (grade <= 25):
    console.log('F')
    break
  case (grade === 50):
    console.log('just passed jesus christ')
    break
}
