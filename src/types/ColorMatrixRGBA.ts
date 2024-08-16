
export type ColorMatrixRGBAConstant = 
  | 'zero'
  | 'identity';

export type ColorMatrixRGBAInit = {
  m11: number; 
  m12: number; 
  m13: number; 
  m14: number; 
  m15: number;
  m21: number; 
  m22: number; 
  m23: number; 
  m24: number; 
  m25: number;
  m31: number; 
  m32: number; 
  m33: number; 
  m34: number; 
  m35: number;
  m41: number; 
  m42: number; 
  m43: number; 
  m44: number; 
  m45: number;
};


export type ColorMatrixRGBA = 
  & ColorMatrixRGBAConstant
  & ColorMatrixRGBAInit;