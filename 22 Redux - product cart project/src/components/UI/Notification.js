import classes from './Notification.module.css';

const Notification = (props) => {
  let specialClasses = '';

  if (props.title === 'Error') {
    specialClasses = classes.error;
  }
  if (props.title === 'Success') {
    specialClasses = classes.success;
  }

  if (props.title === 'Please wait') {
    specialClasses = classes.wait;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
