import React, { useEffect } from 'react';
import { statusMessage } from '../constants';
import './SendMessagesList.css';
import PropTypes from 'prop-types';

const SendMessagesList = ({ messages, getStatus }) => {
  useEffect(() => {
    if (messages.length > 0) {
      messages.forEach(message => {
        getStatus(message.trackId);
      });
    }
  });
  const convertStatus = status => {
    if (+status === -1) {
      return statusMessage.SENT;
    } else if (+status < -1) {
      return statusMessage.ERROR;
    } else if (+status > -1) {
      return statusMessage.QUEUE;
    }
  };
  return (
    <div className="messages__container">
      <h2 className="messages__header">Отправленные сообщения</h2>
      {messages.length === 0 ? (
        <div>Сообщения еще не отправлялись</div>
      ) : (
        <table>
          <thead className="table__head">
            <tr className="table__headcells">
              <td>Дата</td>
              <td>Тема</td>
              <td className="table__statuscell">Статус</td>
            </tr>
          </thead>
          <tbody>
            {messages.map(message => {
              return (
                <tr key={message.trackId}>
                  <td className="table__datecell">
                    {new Date(message.date).toLocaleString('ru-RU', {
                      day: 'numeric',
                      month: 'long',
                    })}
                  </td>
                  <td className="table__subjectcell">{message.subject}</td>
                  <td className="table__statuscell">
                    {convertStatus(message.status)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

SendMessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
  getStatus: PropTypes.func.isRequired,
};

export default SendMessagesList;
