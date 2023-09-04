import {
  allergyOptions,
  recordStatusOptions,
  severityOptions,
  aidsTypes,
} from '../config/constant';

const calculateAge = (date: Date): number => {
  const today = new Date();
  const birthDate = new Date(date);
  return today.getFullYear() - birthDate.getFullYear();
};

const handleYesOrNo = (data: boolean) => {
  if (data) {
    return { label: 'Yes', value: 1 };
  } else if (!data) {
    return { label: 'No', value: 0 };
  } else {
    return { label: 'Select', value: '' };
  }
};

const getKeyValuePair = (value: string, state: string) => {
  switch (state) {
    case 'allergyReaction': {
      const data = allergyOptions.find((x) => x.value === value);
      return {
        label: data?.label,
        value: data?.value,
      };
    }
    case 'allergySeverity': {
      const data = severityOptions.find((x) => x.value === value);
      return {
        label: data?.label,
        value: data?.value,
      };
    }
    case 'status': {
      const data = recordStatusOptions.find((x) => x.value === value);
      return {
        label: data?.label,
        value: data?.value,
      };
    }
    case 'aidsType': {
      const data = aidsTypes.find((x) => x.value === value);
      return {
        label: data?.label,
        value: data?.value,
      };
    }
    default:
      return { label: '', value: '' };
  }
};

export { calculateAge, handleYesOrNo, getKeyValuePair };
