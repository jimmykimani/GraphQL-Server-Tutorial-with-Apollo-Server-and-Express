/** @format */

import uuidv4 from "uuid/v4";

export default {
  Query: {
    notes: async (parent, args, { models }) => {
      return await models.Note.findAll();
    },

    note: async (parent, { id }, { models }) => {
      return await models.Note.findByPk(id);
    }
  },
  Mutation: {
    createNewNote: async (parent, { text }, { models }) => {
      return await models.Note.create({
        text
      });
    },

    deleteNote: async (parent, { id }, { models }) => {
      return await models.Note.destroy({
        where: {
          id
        }
      });
    },
    updateNote: async (parent, { id, text }, { models }) => {
      await models.Note.update(
        {
          text
        },
        {
          where: {
            id: id
          }
        }
      );
      const updatedNote = await models.Note.findByPk(id, {
        include
      });
      return updatedNote;
    }
  }
};
