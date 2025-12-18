import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Review {
  id: number;
  author: string;
  displayName: string;
  rating: number;
  text: string;
  project: string;
  date: string;
  verified: boolean;
}

const mockReviews: Review[] = [];

const Reviews = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h3>
          <p className="text-muted-foreground text-lg">Что говорят владельцы серверов о нашей работе</p>
        </div>
        
        {mockReviews.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mockReviews.map((review) => (
              <Card key={review.id} className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all hover:box-glow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary/20 text-primary font-bold">
                          {review.displayName.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-bold text-sm minecraft-text">{review.displayName}</div>
                        <div className="text-xs text-muted-foreground">{review.date}</div>
                      </div>
                    </div>
                    {review.verified && (
                      <Badge variant="outline" className="border-[#10B981]/30 text-[#10B981] text-xs">
                        <Icon name="CheckCircle2" size={12} className="mr-1" />
                        Проверен
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon 
                        key={i} 
                        name="Star" 
                        size={14} 
                        className={i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}
                      />
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{review.text}</p>
                  <Badge variant="secondary" className="text-xs">
                    {review.project}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="bg-card/50 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="pt-12 pb-12 text-center">
              <Icon name="MessageSquare" size={48} className="mx-auto mb-4 text-muted-foreground opacity-50" />
              <p className="text-muted-foreground text-lg mb-2">Отзывов пока нет</p>
              <p className="text-sm text-muted-foreground">
                Первые отзывы появятся здесь после завершения проектов
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default Reviews;