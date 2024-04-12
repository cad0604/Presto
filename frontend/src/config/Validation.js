export const required = {
  required: true,
  message: "The field is required.",
};

export const number = {
  type:"numeric",
  message: "Write number on floor plan.",
}
export const email = {
  type: "email",
  message: "Please enter a valid email.",
};

export const min = {
  min: 6,
  message: "The password must be at least 6 characters.",
};

export const match = ({ getFieldValue }) => ({
  validator(_, value) {
    if (!value || getFieldValue("password") === value) {
      return Promise.resolve();
    }
    return Promise.reject("The passwords do not match.");
  },
});

export const customerMatch = ({ getFieldValue }) => ({
  validator(_, value) {
    if (!value || getFieldValue("new_password") === value) {
      return Promise.resolve();
    }
    return Promise.reject("The passwords do not match.");
  },
});

export const termsAgree = () => ({
  validator(_, value) {
    if(value === true)
      return Promise.resolve();
    return Promise.reject("Please confirm privacy and purchase conditions.")
  }
})
