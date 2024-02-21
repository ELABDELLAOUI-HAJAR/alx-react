import { Seq } from 'immutable';

export default function printBestStudents(grades) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const filtredGrades = Seq(grades).filter((elmt) => elmt.score >= 70)
    .map((student) => ({
      score: student.score,
      firstName: capitalizeFirstLetter(student.firstName),
      lastName: capitalizeFirstLetter(student.lastName),
    }));

  console.log(filtredGrades.toJS());
}
