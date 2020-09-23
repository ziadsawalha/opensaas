import React from 'react';
import './Alert.scss';
import { Alert as ReactstrapAlert } from 'reactstrap';
import NotificationContext, { NotificationContextType } from '../../Pages/MainLayout/NotificationContext';

type AlertProps = React.HTMLAttributes<HTMLElement> & {
  notificationKey: string;
  isOpen?: boolean;
  raised?: boolean;
  borderLeft?: boolean;
  outlined?: boolean;
  color?: string;
};

const Alert: React.FC<AlertProps> = (props: AlertProps) => {
  const { notificationKey, isOpen, className = '', style = {}, children, color = 'light' } = props;
  const context = React.useContext<NotificationContextType>(NotificationContext);

  const onDismiss = () => {
    context.deleteNotification(notificationKey);
  };

  return (
    <ReactstrapAlert
      color={color}
      className={`Alert w-100 ${className}`}
      isOpen={isOpen}
      toggle={onDismiss}
      style={{ ...style }}>
      {children}
    </ReactstrapAlert>
  );
};

export const TopAlert = (props: AlertProps) => {
  const context = React.useContext<NotificationContextType>(NotificationContext);
  return context.addNotification({
    ...props,
    key: props.notificationKey,
    position: 'top',
  });
};

export const FixedTopAlert = (props: AlertProps) => {
  const context = React.useContext<NotificationContextType>(NotificationContext);
  return (context.addNotification({
    ...props,
    key: props.notificationKey,
    position: 'fixed-top',
  }) as unknown) as JSX.Element;
};

export const FixedBottomAlert = (props: AlertProps) => {
  const context = React.useContext<NotificationContextType>(NotificationContext);
  return (context.addNotification({
    ...props,
    key: props.notificationKey,
    position: 'fixed-bottom',
  }) as unknown) as JSX.Element;
};

export const FixedMarginBottomAlert = (props: AlertProps) => {
  const context = React.useContext<NotificationContextType>(NotificationContext);
  return (context.addNotification({
    ...props,
    className: `${props.className} m-2 w-auto`,
    key: props.notificationKey,
    position: 'fixed-bottom',
  }) as unknown) as JSX.Element;
};

export const RelativeAlert = (props: AlertProps) => {
  const context = React.useContext<NotificationContextType>(NotificationContext);
  return context.addNotification({
    ...props,
    className: `${props.className} `,
    key: props.notificationKey,
    position: 'relative',
  });
};

export default Alert;
