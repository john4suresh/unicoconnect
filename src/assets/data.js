import { v4 as uuid } from 'uuid';

const trelloData = {
  lists: {
    'todo': {
      id: 'todo',
      title: 'Todo',
      cards: [
        {
          id: uuid(),
          title: 'Todo 1',
          status: 'active',
        },
        {
          id: uuid(),
          title: 'Todo 2',
          status: 'active',
        },
        {
          id: uuid(),
          title: 'Todo 3',
          status: 'inactive',
        },
      ]
    },
    'development': {
      id: 'development',
      title: 'Development',
      cards: [
        {
          id: uuid(),
          title: 'Development 1',
          status: 'active',
        },
        {
          id: uuid(),
          title: 'Development 2',
          status: 'active',
        },
        {
          id: uuid(),
          title: 'Development 3',
          status: 'inactive',
        },
      ]
    },
    'testing': {
      id: 'testing',
      title: 'Testing',
      cards: [
        {
          id: uuid(),
          title: 'Testing 1',
          status: 'active',
        },
        {
          id: uuid(),
          title: 'Testing 2',
          status: 'active',
        },
        {
          id: uuid(),
          title: 'Testing 3',
          status: 'inactive',
        },
      ]
    },
    'done': {
      id: 'done',
      title: 'Done',
      cards: [
        {
          id: uuid(),
          title: 'Done 1',
          status: 'active',
        },
        {
          id: uuid(),
          title: 'Done 2',
          status: 'active',
        },
        {
          id: uuid(),
          title: 'Done 3',
          status: 'inactive',
        },
      ]
    },
  },
  listIds: ['todo', 'development', 'testing', 'done',],
};

export default trelloData;

// trelloData.listIds.map(ele => trelloData.lists[ele].cards.filter(ele => ele.status === 'active'))

// trelloData.listIds.map((element) => {
//   return {...element, subElements: element.subElements.filter((subElement) => subElement.surname === 1)}
// })