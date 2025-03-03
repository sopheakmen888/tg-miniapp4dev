import { ArrowLeft } from "lucide-react";

export default function CouponPage() {
  const coupons = [
    {
      id: 1,
      color: "bg-emerald-800",
      date: "March 20, 2023",
      textColor: "text-white",
    },
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <div className="p-4 sticky top-0 bg-white z-10">
        <div className="flex items-center mb-4">
          <button className="p-1">
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </button>
          <h1 className="text-4xl font-medium text-center flex-1 text-green-800">
            COUPON
          </h1>
        </div>
        <p className="text-sm text-gray-600 text-center mb-4">
          Save more on your membership with our special coupons! Apply a total
          of standard and extra exclusive discounts.
        </p>
      </div>

      <div className="px-4 pb-8 space-y-4 text-left">
        {coupons.map((coupon) => (
          <div
            key={coupon.id}
            className={`${coupon.color} rounded-lg overflow-hidden shadow-md`}
          >
            <div className="p-3 flex mb-4">
              <div className="flex-1 pr-8">
                <div className={`${coupon.textColor} font-bold mb-2 text-1xl`}>
                  SPECIAL COUPON
                </div>
                <div className={`${coupon.textColor} text-s `}>
                7-Day Free Trial Pass
                </div>

                <div className="mt-2">
                  <div className={`${coupon.textColor} text-xs`}>
                    Valid until: {coupon.date}
                  </div>
                  <div className={`${coupon.textColor} text-xs mt-1`}>
                  Terms: New members only One-time use per person.
                  </div>
                  <div className={`${coupon.textColor} text-xs mt-1`}>
                  Claim your free trial now & kick start your fitness journey!
                  </div>
                 
                </div>
              </div>

              {/* Image section with triangle */}
              <div className="relative w-1/3 min-h-[120px]">
                {/* Triangle overlay */}
                <div
                  className="absolute top-0 left-0 h-full w-full z-10"
                  style={{
                    clipPath: "polygon(0 0, 0% 100%, 100% 100%, 100% 0)",
                    background: `linear-gradient(135deg, transparent 0%, transparent 50%, ${coupon.color} 50%, ${coupon.color} 100%)`,
                  }}
                ></div>

                <img
                  src="/coupon.jpg"
                  alt="Coupon"
                  width={120}
                  height={120}
                  className="absolute top-0 left-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
