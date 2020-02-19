// form
export function validateEmail(email) {
  let pattern =
    '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/';
  return pattern.test(String(email).toLowerCase());
}

// drag and drop
export const getTotalSize = files => {
  if (files.length === 0) return 0;
  return files.reduce((total, file) => total + file.size, 0);
};

export const validFilesByType = (file, validFileTypes) => {
  for (let i = 0; i < validFileTypes.length; i++) {
    if (file.type === validFileTypes[i]) {
      return true;
    }
  }

  return false;
};

//common
export function convertByteToMb(byte) {
  return byte / 1024 / 1024;
}

export function toBase64(file) {
  return new Promise(resolve => {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onloadend = function() {
      const regex = /data:\S*;base64,/;
      const fileInBase64 = fileReader.result.replace(regex, '');
      resolve(fileInBase64);
    };
  });
}

export async function filesToBase64(files) {
  let filesInBase64 = [];
  await Promise.all(
    files.map(async file => {
      const contents = await toBase64(file);
      const fileObj = {
        name: file.name,
        content: contents,
        encoding: 'base64',
      };
      filesInBase64.push(fileObj);
    })
  );
  return filesInBase64;
}

export const processFileName = filename => {
  const max_filename_length = 20;
  if (filename.length > max_filename_length) {
    let end = filename.slice(-4);
    let start = filename.slice(0, 13);
    return start + '...' + end;
  } else {
    return filename;
  }
};
