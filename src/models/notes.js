/** @format */

const note = (sequelize, DataTypes) => {
  const Note = sequelize.define("note", {
    text: DataTypes.STRING
    // validate: { notEmpty: true }
  });
  return Note;
};

export default note;
