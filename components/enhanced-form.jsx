"use client"
import { useState, useEffect } from "react"
import OptimizedMotion from "./optimized-motion"

export default function EnhancedForm() {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    description: "",
  }

  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [formFeedback, setFormFeedback] = useState("")

  // التحقق من صحة البيانات عند تغيير الحقول
  useEffect(() => {
    if (Object.keys(touched).length > 0) {
      validateForm()
    }
  }, [formData, touched])

  const validateForm = () => {
    const newErrors = {}

    // التحقق من الاسم
    if (touched.name && !formData.name.trim()) {
      newErrors.name = "الاسم مطلوب"
    } else if (touched.name && formData.name.trim().length < 3) {
      newErrors.name = "يجب أن يكون الاسم 3 أحرف على الأقل"
    }

    // التحقق من البريد الإلكتروني
    if (touched.email && !formData.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب"
    } else if (touched.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صالح"
    }

    // التحقق من رقم الهاتف
    if (touched.phone && !formData.phone.trim()) {
      newErrors.phone = "رقم الهاتف مطلوب"
    } else if (touched.phone && !/^(05)[0-9]{8}$/.test(formData.phone)) {
      newErrors.phone = "يجب أن يبدأ رقم الهاتف بـ 05 ويتكون من 10 أرقام"
    }

    // التحقق من الوصف
    if (touched.description && !formData.description.trim()) {
      newErrors.description = "الوصف مطلوب"
    } else if (touched.description && formData.description.trim().length < 10) {
      newErrors.description = "يجب أن يكون الوصف 10 أحرف على الأقل"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
  }

  const handleFocus = (e) => {
    const { name } = e.target
    // إزالة رسالة الخطأ عند التركيز على الحقل
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // تحديث حالة اللمس لجميع الحقول
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true
      return acc
    }, {})
    setTouched(allTouched)

    // التحقق من صحة النموذج
    const isValid = validateForm()

    if (!isValid) {
      setFormFeedback("يرجى تصحيح الأخطاء قبل الإرسال")
      return
    }

    setIsSubmitting(true)
    setFormFeedback("")

    try {
      // محاكاة طلب API
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // في الإنتاج، استبدل هذا بطلب API حقيقي
      // const response = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // })

      // if (!response.ok) {
      //   throw new Error("فشل إرسال النموذج")
      // }

      setSubmitStatus("success")
      setFormData(initialFormData)
      setTouched({})
      setErrors({})
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
      setFormFeedback("حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const getInputClasses = (fieldName) => {
    return `w-full px-4 py-3 bg-gray-800 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white transition-colors ${
      errors[fieldName] && touched[fieldName]
        ? "border-red-500"
        : touched[fieldName] && !errors[fieldName]
          ? "border-emerald-500"
          : "border-gray-700"
    }`
  }

  return (
    <div className="bg-gray-900 rounded-lg p-6 md:p-8 shadow-lg shadow-emerald-900/10 border border-gray-700">
      {submitStatus === "success" ? (
        <div className="text-center py-8">
          <OptimizedMotion
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-16 h-16 bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-emerald-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </OptimizedMotion>
          <h3 className="text-xl font-bold text-white mb-2">تم إرسال رسالتك بنجاح!</h3>
          <p className="text-gray-400">سنتواصل معك قريبًا.</p>
          <button
            onClick={() => setSubmitStatus(null)}
            className="mt-6 px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors text-white"
          >
            إرسال رسالة أخرى
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              الاسم <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              className={getInputClasses("name")}
              placeholder="أدخل اسمك الكامل"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && touched.name && (
              <p id="name-error" className="mt-1 text-sm text-red-500">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              البريد الإلكتروني <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              className={getInputClasses("email")}
              placeholder="example@example.com"
              dir="ltr"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && touched.email && (
              <p id="email-error" className="mt-1 text-sm text-red-500">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
              رقم الهاتف <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              className={getInputClasses("phone")}
              placeholder="05xxxxxxxx"
              dir="ltr"
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && touched.phone && (
              <p id="phone-error" className="mt-1 text-sm text-red-500">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
              كيف يمكننا مساعدتك؟ <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              rows={4}
              className={getInputClasses("description")}
              placeholder="يرجى وصف كيف يمكننا مساعدتك..."
              aria-invalid={errors.description ? "true" : "false"}
              aria-describedby={errors.description ? "description-error" : undefined}
            />
            {errors.description && touched.description && (
              <p id="description-error" className="mt-1 text-sm text-red-500">
                {errors.description}
              </p>
            )}
          </div>

          {formFeedback && (
            <div className="p-3 bg-red-900/30 border border-red-800 rounded-md">
              <p className="text-red-400 text-center">{formFeedback}</p>
            </div>
          )}

          <OptimizedMotion
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-md shadow-lg shadow-emerald-900/20 transition-colors text-lg ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            <button type="submit" disabled={isSubmitting} className="w-full h-full flex items-center justify-center">
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  جاري الإرسال...
                </>
              ) : (
                "إرسال"
              )}
            </button>
          </OptimizedMotion>

          <p className="text-gray-500 text-sm text-center mt-4">
            الحقول المميزة بـ <span className="text-red-500">*</span> مطلوبة
          </p>
        </form>
      )}
    </div>
  )
}
