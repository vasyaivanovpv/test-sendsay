export const form = {
  NAME_PLACEHOLDER: 'Имя',
  EMAIL_PLACEHOLDER: 'Email',
};

export const errorMessages = {
  EMAIL_EMPTY: 'Email не может быть пустым',
  LIMIT_SIZE_FILE: 'Невозможно добавить. Превышен размер файла, не более 5мб',
  LIMIT_SIZE_FILES:
    'Невозможно добавить. Превышен размер файлов в одном письме, не более 20мб',
  INVALID_TYPE_FILE: 'Мы не принимаем этот тип файла',
};

export const actionTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT: 'LOGOUT',
  SEND_MESSAGE: 'SEND_MESSAGE',
  GET_STATUS: 'GET_STATUS',
};

export const statusMessage = {
  SENT: 'Отправлено',
  QUEUE: 'В очереди',
  ERROR: 'Ошибка',
};
