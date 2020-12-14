export const jc = (...allNames: string[]) => allNames.filter(s => !!s).join(' ');
export const jcm = (classNamesMap: { [className: string]: boolean }) =>
  Object.keys(classNamesMap)
    .filter(key => classNamesMap[key])
    .join(' ');
