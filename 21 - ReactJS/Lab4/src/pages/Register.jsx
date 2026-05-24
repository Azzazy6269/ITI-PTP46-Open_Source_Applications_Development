import React, { useContext, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { LanguageContext } from '../context/LanguageContext';

const Register = () => {
  const { language } = useContext(LanguageContext);

  const registerSchema = useMemo(() => {
    const isEn = language === 'en';

    return z.object({
      email: z
        .string()
        .min(1, { message: isEn ? 'Email is required' : 'البريد الإلكتروني مطلوب' })
        .email({ message: isEn ? 'Invalid email format' : 'صيغة البريد الإلكتروني غير صحيحة' }),
      
      name: z
        .string()
        .min(1, { message: isEn ? 'Name is required' : 'الاسم مطلوب' }),
      
      username: z
        .string()
        .min(1, { message: isEn ? 'Username is required' : 'اسم المستخدم مطلوب' })
        .regex(/^\S+$/, { message: isEn ? 'Username cannot contain spaces' : 'اسم المستخدم لا يجب أن يحتوي على مسافات' }),
      
      password: z
        .string()
        .min(8, { message: isEn ? 'Password must be at least 8 characters long' : 'كلمة المرور يجب ألا تقل عن 8 أحرف' })
        .regex(/[a-z]/, { message: isEn ? 'Must contain at least one lowercase letter' : 'يجب أن تحتوي على حرف صغير واحد على الأقل' })
        .regex(/[A-Z]/, { message: isEn ? 'Must contain at least one uppercase letter' : 'يجب أن تحتوي على حرف كبير واحد على الأقل' })
        .regex(/\d/, { message: isEn ? 'Must contain at least one digit' : 'يجب أن تحتوي على رقم واحد على الأقل' })
        .regex(/[*@%$#]/, { message: isEn ? 'Must contain at least one special character (*@%$#)' : 'يجب أن تحتوي على رمز خاص واحد على الأقل مثل (*@%$#)' }),
      
      confirmPassword: z
        .string()
        .min(1, { message: isEn ? 'Please confirm your password' : 'برجاء تأكيد كلمة المرور' }),
    }).refine((data) => data.password === data.confirmPassword, {
      message: isEn ? "Passwords do not match" : "كلمتا المرور غير متطابقتين",
      path: ["confirmPassword"], 
    });
  }, [language]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onSubmit", 
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
    window.location.href = '/products'; 
  };

  const isRtl = language === 'ع';

  const styles = {
    container: {
      maxWidth: '440px',
      margin: '60px auto',
      padding: '35px 30px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.02)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      direction: isRtl ? 'rtl' : 'ltr',
      textAlign: isRtl ? 'right' : 'left',
      boxSizing: 'border-box'
    },
    title: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: '25px',
      marginTop: '0px'
    },
    fieldGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    },
    label: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#4a4a4a'
    },
    input: {
      width: '100%',
      padding: '12px 14px',
      fontSize: '15px',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      color: '#1a1a1a',
      outline: 'none',
      transition: 'all 0.2s ease-in-out',
      boxSizing: 'border-box'
    },
    errorText: {
      color: '#dc2626',
      fontSize: '12px',
      fontWeight: '5px',
      marginTop: '2px',
      display: 'block'
    },
    button: {
      width: '100%',
      padding: '14px',
      backgroundColor: '#0066cc',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '600',
      marginTop: '15px',
      transition: 'background-color 0.2s ease',
      boxShadow: '0 4px 12px rgba(0, 102, 204, 0.2)'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{isRtl ? 'إنشاء حساب جديد' : 'Create New Account'}</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* البريد الإلكتروني */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>
            {isRtl ? 'البريد الإلكتروني' : 'Email Address'}
          </label>
          <input 
            type="text" 
            {...register("email")} 
            style={{
              ...styles.input,
              border: errors.email ? '1px solid #dc2626' : styles.input.border,
              backgroundColor: errors.email ? '#fff5f5' : styles.input.backgroundColor
            }} 
          />
          {errors.email && <span style={styles.errorText}>{errors.email.message}</span>}
        </div>

        {/* الاسم الكامل */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>
            {isRtl ? 'الاسم الكامل' : 'Full Name'}
          </label>
          <input 
            type="text" 
            {...register("name")} 
            style={{
              ...styles.input,
              border: errors.name ? '1px solid #dc2626' : styles.input.border,
              backgroundColor: errors.name ? '#fff5f5' : styles.input.backgroundColor
            }} 
          />
          {errors.name && <span style={styles.errorText}>{errors.name.message}</span>}
        </div>

        {/* اسم المستخدم */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>
            {isRtl ? 'اسم المستخدم (بدون مسافات)' : 'Username (No spaces)'}
          </label>
          <input 
            type="text" 
            {...register("username")} 
            style={{
              ...styles.input,
              border: errors.username ? '1px solid #dc2626' : styles.input.border,
              backgroundColor: errors.username ? '#fff5f5' : styles.input.backgroundColor
            }} 
          />
          {errors.username && <span style={styles.errorText}>{errors.username.message}</span>}
        </div>

        {/* كلمة المرور */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>
            {isRtl ? 'كلمة المرور' : 'Password'}
          </label>
          <input 
            type="password" 
            {...register("password")} 
            style={{
              ...styles.input,
              border: errors.password ? '1px solid #dc2626' : styles.input.border,
              backgroundColor: errors.password ? '#fff5f5' : styles.input.backgroundColor
            }} 
          />
          {errors.password && <span style={styles.errorText}>{errors.password.message}</span>}
        </div>

        {/* تأكيد كلمة المرور */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>
            {isRtl ? 'تأكيد كلمة المرور' : 'Confirm Password'}
          </label>
          <input 
            type="password" 
            {...register("confirmPassword")} 
            style={{
              ...styles.input,
              border: errors.confirmPassword ? '1px solid #dc2626' : styles.input.border,
              backgroundColor: errors.confirmPassword ? '#fff5f5' : styles.input.backgroundColor
            }} 
          />
          {errors.confirmPassword && <span style={styles.errorText}>{errors.confirmPassword.message}</span>}
        </div>

        {/* زر الإرسال */}
        <button 
          type="submit" 
          style={styles.button}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0052a3'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0066cc'}
        >
          {isRtl ? 'تسجيل حساب' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default Register;