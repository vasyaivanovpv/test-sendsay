import React, { useState, useRef } from 'react';
import Dropzone from 'react-dropzone';
import { form, errorMessages } from '../constants';
import {
  convertByteToMb,
  getTotalSize,
  validFilesByType,
  processFileName,
} from '../utils';
import PropTypes from 'prop-types';
import './SendForm.css';
import paperclip from '../imgs/paperclip.svg';
import trash from '../imgs/trash.svg';

const LIMITED_SIZES_FILES = {
  file: 5 * 1024 * 1024,
  files: 20 * 1024 * 1024,
};
const TYPES_FILES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'application/msword',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/pdf',
  'application/x-zip-compressed',
];

const initialState = {
  nameFrom: '',
  emailFrom: '',
  nameTo: '',
  emailTo: '',
  subject: '',
  textMessage: '',
};

const SendForm = ({ sendMessage }) => {
  const [inputs, setInputs] = useState(initialState);
  const [isSent, setSent] = useState(false);
  const [files, setFiles] = useState([]);
  const [isValid, setValid] = useState(false);
  const [errors, setError] = useState({
    emailFrom: '',
    emailTo: '',
    invalidTypeFile: {
      message: '',
      files: [],
    },
    limitedSizeFile: {
      message: '',
      files: [],
    },
    limitedSizeFiles: '',
  });

  const dropzoneRef = useRef(null);

  const handleChange = e => {
    e.persist();
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value.trim(),
    }));
  };

  const handleDrop = acceptedFiles => {
    let invalidFilesByType = [];
    let invalidFilesBySize = [];

    const filteredFilesByType = acceptedFiles.filter(file => {
      if (!validFilesByType(file, TYPES_FILES)) {
        invalidFilesByType = [...invalidFilesByType, file];
      }
      return validFilesByType(file, TYPES_FILES);
    });

    const filteredFiles = filteredFilesByType.filter(file => {
      if (file.size > LIMITED_SIZES_FILES.file) {
        invalidFilesBySize = [...invalidFilesBySize, file];
      }
      return file.size <= LIMITED_SIZES_FILES.file;
    });

    const sizeFilteredFiles = getTotalSize(filteredFiles);
    const sizeDropedFiles = getTotalSize(files);

    if (
      sizeFilteredFiles > LIMITED_SIZES_FILES.files ||
      sizeDropedFiles + sizeFilteredFiles > LIMITED_SIZES_FILES.files
    ) {
      setError({
        ...errors,
        invalidTypeFile: {
          message: '',
          files: [],
        },
        limitedSizeFile: {
          message: '',
          files: [],
        },
        limitedSizeFiles: errorMessages.LIMIT_SIZE_FILES,
      });
    } else {
      setFiles([...files, ...filteredFiles]);

      setError({
        ...errors,
        invalidTypeFile: {
          message: '',
          files: [],
        },
        limitedSizeFile: {
          message: '',
          files: [],
        },
        limitedSizeFiles: '',
      });
    }

    invalidFilesByType.length !== 0 &&
      setError({
        ...errors,
        limitedSizeFile: {
          message: '',
          files: [],
        },
        limitedSizeFiles: '',
        invalidTypeFile: {
          message: errorMessages.INVALID_TYPE_FILE,
          files: [...errors.invalidTypeFile.files, ...invalidFilesByType],
        },
      });

    invalidFilesBySize.length !== 0 &&
      setError({
        ...errors,
        limitedSizeFiles: '',
        invalidTypeFile: {
          message: '',
          files: [],
        },
        limitedSizeFile: {
          message: errorMessages.LIMIT_SIZE_FILE,
          files: [...errors.limitedSizeFile.files, ...invalidFilesBySize],
        },
      });

    invalidFilesByType.length !== 0 &&
      invalidFilesBySize.length !== 0 &&
      setError({
        ...errors,
        limitedSizeFiles: '',
        invalidTypeFile: {
          message: errorMessages.INVALID_TYPE_FILE,
          files: [...errors.invalidTypeFile.files, ...invalidFilesByType],
        },
        limitedSizeFile: {
          message: errorMessages.LIMIT_SIZE_FILE,
          files: [...errors.limitedSizeFile.files, ...invalidFilesBySize],
        },
      });

    setTimeout(() => {
      setError({
        ...errors,
        invalidTypeFile: {
          message: '',
          files: [],
        },
        limitedSizeFile: {
          message: '',
          files: [],
        },
        limitedSizeFiles: '',
      });
    }, 5000);
  };
  const openDialog = e => {
    e.preventDefault();
    if (dropzoneRef.current) {
      dropzoneRef.current.open();
    }
  };
  const deleteFile = index => {
    return e => {
      e.persist();
      setFiles(files.filter((_, i) => i !== index));
    };
  };
  const handleBlur = e => {
    e.persist();

    if (inputs[e.target.name] !== '') {
      setError({ ...errors, [e.target.name]: '' });
    } else {
      setError({ ...errors, [e.target.name]: errorMessages.EMAIL_EMPTY });
      setValid(false);
    }

    if (inputs.emailFrom !== '' && inputs.emailTo !== '') {
      setValid(true);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    sendMessage({
      nameFrom: inputs.nameFrom,
      emailFrom: inputs.emailFrom,
      nameTo: inputs.nameTo,
      emailTo: inputs.emailTo,
      subject: inputs.subject,
      textMessage: inputs.textMessage,
      files: files,
    }).then(() => {
      setSent(true);
    });
  };
  const clearForm = e => {
    e.preventDefault();
    setInputs(initialState);
    setSent(false);
    setValid(false);
    setFiles([]);
  };
  return (
    <div>
      {isSent ? (
        <div className="form__sent" onClick={clearForm}>
          <h1 className="form__header">
            Сообщение поставлено в очередь на отправку
          </h1>
          <p className="form__sentp">
            {`Совсем скоро сообщение вылетит из сервера, и будет двигаться в
      сторону почты получателя «${inputs.emailTo}» со скоростью электронов.`}
          </p>
        </div>
      ) : (
        <div className="form__container">
          <Dropzone ref={dropzoneRef} noClick noKeyboard onDrop={handleDrop}>
            {({ getRootProps, getInputProps, isDragActive }) => (
              <div>
                {isDragActive && (
                  <div>
                    <div>
                      <div>Бросайте файлы сюда, я ловлю</div>
                      <div>
                        Мы принимаем картинки (jpg, png, gif), офисные файлы
                        (doc, xls, pdf) и zip-файлы.
                      </div>
                      <div>Размеры файла до 5 МБ</div>
                    </div>
                  </div>
                )}
                <h2 className="form__header">Отправлялка сообщений</h2>
                <form {...getRootProps()}>
                  <input {...getInputProps()} />
                  <div className="form__group">
                    <div className="form__label">От кого</div>
                    <input
                      type="text"
                      name="nameFrom"
                      placeholder={form.NAME_PLACEHOLDER}
                      value={inputs.nameFrom}
                      onChange={handleChange}
                      tabIndex="1"
                      className="form__input"
                    />
                    <input
                      type="email"
                      name="emailFrom"
                      placeholder={form.EMAIL_PLACEHOLDER}
                      value={inputs.emailFrom}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      tabIndex="2"
                      required
                      className="form__input"
                    />
                  </div>
                  <div className="form__errorcontainer">
                    <div className="form__error">{errors.emailFrom}</div>
                  </div>
                  <div className="form__group">
                    <div className="form__label">Кому</div>
                    <input
                      type="text"
                      name="nameTo"
                      value={inputs.nameTo}
                      onChange={handleChange}
                      placeholder={form.NAME_PLACEHOLDER}
                      tabIndex="3"
                      className="form__input"
                    />
                    <input
                      type="email"
                      name="emailTo"
                      value={inputs.emailTo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={form.EMAIL_PLACEHOLDER}
                      tabIndex="4"
                      required
                      className="form__input"
                    />
                  </div>
                  <div className="form__errorcontainer">
                    <div className="form__error">{errors.emailTo}</div>
                  </div>
                  <div className="form__group">
                    <div className="form__label">Тема письма</div>
                    <input
                      type="text"
                      name="subject"
                      value={inputs.subject}
                      onChange={handleChange}
                      tabIndex="5"
                      className="form__input form__input-fullwidth"
                    />
                  </div>
                  <div className="form__group">
                    <div className="form__label">Сообщение</div>
                    <textarea
                      name="textMessage"
                      value={inputs.textMessage}
                      onChange={handleChange}
                      tabIndex="6"
                      className="form__input form__input-fullwidth form__input-textarea"
                    ></textarea>
                  </div>
                  {files.length > 0 && (
                    <div className="form__group">
                      <div className="form__files">
                        {files.map((file, index) => (
                          <div
                            key={file.path + index}
                            className="form__filecontainer"
                          >
                            <img
                              src={paperclip}
                              className="form__paperclip-desaturated"
                              alt="paperclip"
                            />
                            <span className="form__filename">
                              {processFileName(file.path)}
                            </span>
                            <span
                              className="form__filedelete"
                              onClick={deleteFile(index)}
                            >
                              <img src={trash} alt="delete" />
                              <span>Удалить</span>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="from__group">
                    <div>
                      {errors.invalidTypeFile.message &&
                        errors.invalidTypeFile.files.map((file, index) => (
                          <div key={file.path + index}>
                            <span>{`${file.name} `}</span>
                            <span className="form__error">
                              {errors.invalidTypeFile.message}
                            </span>
                          </div>
                        ))}
                      {errors.limitedSizeFile.message &&
                        errors.limitedSizeFile.files.map((file, index) => (
                          <div key={file.path + index}>
                            <span>{`${file.name} `}</span>
                            <span>{`${convertByteToMb(file.size).toFixed(
                              2
                            )}Mb `}</span>
                            <span className="form__error">
                              {errors.limitedSizeFile.message}
                            </span>
                          </div>
                        ))}
                      <div className="form__error">
                        {errors.limitedSizeFiles}
                      </div>
                    </div>
                    <label className="form__label">
                      <img src={paperclip} alt="paperclip" />
                      <span className="form__label form__label-blue form__link">
                        Прикреить файл
                      </span>
                      <input
                        type="file"
                        onClick={openDialog}
                        className="form__filebutton"
                      />
                    </label>
                  </div>
                  <div className="form__group">
                    <input
                      type="submit"
                      onClick={handleSubmit}
                      value="Отправить"
                      disabled={!isValid}
                      className="form__button"
                    />
                  </div>
                </form>
              </div>
            )}
          </Dropzone>
        </div>
      )}
    </div>
  );
};

SendForm.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};

export default SendForm;
