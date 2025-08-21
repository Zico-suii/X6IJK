import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Gardening Enthusiast",
    content: "Plantify AI has transformed my gardening! I can now identify any plant I encounter and get perfect care instructions. My plants have never been healthier!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b300?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    role: "Landscape Designer",
    content: "As a professional, accuracy is crucial. Plantify AI's 95% accuracy rate and detailed plant information have made it an essential tool in my work.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Emma Rodriguez",
    role: "Plant Parent",
    content: "I used to kill every plant I touched. Thanks to Plantify AI's care tips and disease detection, I now have a thriving indoor garden!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Loved by Plant Enthusiasts Worldwide
          </h2>
          <p className="text-xl text-gray-600">
            Join millions of happy users who trust Plantify AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}