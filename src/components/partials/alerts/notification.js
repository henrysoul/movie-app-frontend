import { notification } from "antd";
export const success = ({ placement = "topRight", title, msg }) => {
  notification.success({
    message: title,
    description: msg,
    placement,
  });
};

export const error = ({ placement = "topRight", title, msg }) => {
  notification.error({
    message: title,
    description: msg,
    placement,
  });
};

export const warning = ({ placement = "topRight", title, msg }) => {
  notification.warning({
    message: title,
    description: { msg },
    placement,
  });
};

export const info = ({ placement = "topRight", title, msg }) => {
  notification.info({
    message: title,
    description: msg,
    placement,
  });
};

export const serverError = () => {
  notification.error({
    message: "Error",
    description: "An error occured",
    placement: "topRight",
  });
};
