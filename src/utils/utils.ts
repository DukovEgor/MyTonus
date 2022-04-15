import dayjs from 'dayjs';

export const getResultDay = () => {
  const today = dayjs();
  today.add(30, 'day');
};


export const IMT = (height: number, weight: number) => Number((weight / (Math.pow(height, 2))) * 10000).toFixed(1);

export const IMTdesc = (imt: number): string => {
  switch (Math.ceil(imt)) {
    case 16:
    case 17:
    case 18:
      return 'Выраженный дефицит массы тела';
    case 19:
      return 'Недостаточная (дефицит) масса тела';
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
      return 'Норма';
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
      return 'Избыточная масса тела (предожирение)';
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:
      return 'Ожирение первой степени';
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
      return 'Ожирение второй степени';
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
      return 'Ожирение третьей степени (морбидное)';
    default:
      return 'Избыточная масса тела';
  }
};
