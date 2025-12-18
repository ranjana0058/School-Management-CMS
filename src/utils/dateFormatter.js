export const formatExamDate = (dateString) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const formatExamTime = (timeString) => {
  if (!timeString) return '';
  
  const [hours, minutes] = timeString.split(':');
  const date = new Date();
  date.setHours(parseInt(hours), parseInt(minutes));
  
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};

export const isExamUpcoming = (dateString, timeString) => {
  if (!dateString || !timeString) return false;
  
  const examDateTime = new Date(`${dateString}T${timeString}`);
  const now = new Date();
  
  return examDateTime > now;
};

export const getExamStatus = (dateString, timeString) => {
  if (!dateString || !timeString) return 'unknown';
  
  const examDateTime = new Date(`${dateString}T${timeString}`);
  const now = new Date();
  
  if (examDateTime > now) {
    return 'upcoming';
  } else {
    return 'completed';
  }
};