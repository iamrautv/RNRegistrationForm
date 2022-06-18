
import axios from 'axios';

const registerFormHandler = () => ({
  save: async (dataObj, setAlertConfig, alertConfig) => {
    try {
      setAlertConfig({
        ...alertConfig,
        isOpen: true,
        title: '',
        message: 'Loading...',
        isConfirm: false,
        showProgress: true
      });

      const res = await axios.post('crm/register', dataObj);

      if (res.statusCode === 200) {
        setAlertConfig({
          ...alertConfig,
          isOpen: true,
          title: 'Success',
          message: 'Details saved successfuly!',
          isConfirm: true,
          showProgress: false
        });
      } else {
        setAlertConfig({
          ...alertConfig,
          isOpen: true,
          title: 'Error',
          message: 'Error in saving the data',
          isConfirm: true,
          showProgress: false
        });
      }
    } catch (err) {
      setAlertConfig({
        ...alertConfig,
        isOpen: true,
        title: 'Error',
        message: err.message,
        isConfirm: true,
        showProgress: false
      });
    }
  }
});

export default registerFormHandler;
