'use strict';

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const notepad = {
  notes: [],

  getNotes() {
    return this.notes;
  },

  findNoteById(id) {
    for (const note of this.notes) {
      if (note['id'] === id) {
        return note;
      }
    }
    return undefined;
  },

  saveNote(note) {
    this.notes.push(note);
  },

  deleteNote(id) {
    this.notes.splice(id - 1, 1);
  },

  updateNoteContent(id, updatedContent) {
    for (let note of this.notes) {
      if (note['id'] === id) {
        note = Object.assign(note, updatedContent);
        return note;
      }
    }
    return undefined;
  },

  updateNotePriority(id, priority) {
    for (const note of this.notes) {
      if (note['id'] === id) {
        note['priority'] = priority;
        return note;
      }
    }
    return undefined;
  },

  filterNotesByQuery(query) {
    this.notesByQuery = [];
    for (const note of this.notes) {
      if (
        (note['title'].toLowerCase() + note['body'].toLowerCase()).includes(
          query.toLowerCase(),
        )
      ) {
        this.notesByQuery.push(note);
      }
    }
    return this.notesByQuery;
  },
};

notepad.saveNote({
  id: 1,
  title: 'JavaScript essentials',
  body:
    'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
  priority: PRIORITY_TYPES.HIGH,
});

notepad.saveNote({
  id: 2,
  title: 'Refresh HTML and CSS',
  body:
    'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
  priority: PRIORITY_TYPES.NORMAL,
});

notepad.saveNote({
  id: 3,
  title: 'Get comfy with Frontend frameworks',
  body:
    'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: PRIORITY_TYPES.NORMAL,
});

notepad.saveNote({
  id: 4,
  title: 'Winter clothes',
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: PRIORITY_TYPES.LOW,
});

console.log('Все текущие заметки: ', notepad.getNotes());

// Проверка

// notepad.updateNotePriority(4, PRIORITY_TYPES.NORMAL);
// console.log(
//   'Заметки после обновления приоритета для id 4: ',
//   notepad.getNotes(),
// );

// notepad.updateNotePriority(3, PRIORITY_TYPES.LOW);
// console.log(
//   'Заметки после обновления приоритета для id 3: ',
//   notepad.getNotes(),
// );

// console.log(
//   'Отфильтровали заметки по ключевому слову "html": ',
//   notepad.filterNotesByQuery('html'),
// );

// console.log(
//   'Отфильтровали заметки по ключевому слову "javascript": ',
//   notepad.filterNotesByQuery('javascript'),
// );

// notepad.updateNoteContent(3, { title: 'Get comfy with React.js or Vue.js' });
// console.log(
//   'Заметки после обновления контента заметки с id 3: ',
//   notepad.getNotes(),
// );

// notepad.deleteNote(2);
// console.log('Заметки после удаления с id 2: ', notepad.getNotes());
