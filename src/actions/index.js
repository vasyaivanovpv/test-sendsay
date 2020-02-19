import { actionTypes } from '../constants';
import { filesToBase64 } from '../utils';
import Sendsay from 'sendsay-api';

export const sendMessage = message => dispatch => {
  return new Promise(resolve => {
    const sendsay = new Sendsay();
    sendsay
      .login({
        login: 'soldatik2005@mail.ru',
        password: 'Y0df9;bpym',
      })
      .then(() => {
        filesToBase64(message.files);
      })
      .then(
        filesBase64 => {
          dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            payload: {
              isLogged: true,
              session: sendsay.session,
            },
          });
          sendsay
            .request({
              action: 'issue.send.test',
              letter: {
                subject: message.subject,
                'from.name': message.nameFrom,
                'from.email': message.emailFrom,
                'to.name': message.nameTo,
                message: { text: message.textMessage },
                attaches: filesBase64,
              },
              sendwhen: 'test',
              mca: [message.emailTo],
            })
            .then(res => {
              dispatch({
                type: actionTypes.SEND_MESSAGE,
                payload: {
                  message: {
                    date: Date.now(),
                    subject: message.subject,
                    trackId: res['track.id'],
                    status: 0,
                  },
                },
              });
              resolve(res);
            });
        },
        error => {
          dispatch({
            type: actionTypes.LOGIN_ERROR,
            error: true,
            payload: {
              errMessage: error,
              session: '',
            },
          });
        }
      );
  });
};

export const getStatus = trackId => dispatch => {
  const sendsay = new Sendsay();
  sendsay
    .login({
      login: 'soldatik2005@mail.ru',
      password: 'Y0df9;bpym',
    })
    .then(
      () => {
        dispatch({
          type: actionTypes.LOGIN_SUCCESS,
          payload: {
            isLogged: true,
            session: sendsay.session,
          },
        });
        sendsay
          .request({
            action: 'track.get',
            id: trackId,
            session: sendsay.session,
          })
          .then(res => {
            dispatch({
              type: actionTypes.GET_STATUS,
              payload: {
                trackId: trackId,
                status: res.obj.status,
              },
            });
          });
      },
      error => {
        dispatch({
          type: actionTypes.LOGIN_ERROR,
          error: true,
          payload: {
            errMessage: error,
            session: '',
          },
        });
      }
    );
};
