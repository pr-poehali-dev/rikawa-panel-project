import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface Order {
  id: number;
  clientName: string;
  projectName: string;
  projectType: string;
  status: string;
  progress: number;
  requirements: string;
  deadline: string;
}

interface Review {
  id: number;
  author: string;
  displayName: string;
  text: string;
  project: string;
  date: string;
  approved: boolean;
}

const AdminPanel = () => {
  const [orders] = useState<Order[]>([
    {
      id: 1,
      clientName: 'MasterCraft',
      projectName: 'Плагин экономики',
      projectType: 'Плагин',
      status: 'В разработке',
      progress: 65,
      requirements: 'Нужна система экономики с банками, торговлей между игроками и налогами',
      deadline: '15 января 2025'
    },
    {
      id: 2,
      clientName: 'ServerKing',
      projectName: 'Донат-сайт',
      projectType: 'Веб-сайт',
      status: 'Тестирование',
      progress: 90,
      requirements: 'Современный сайт с интеграцией платежей, личным кабинетом и статистикой',
      deadline: '20 декабря 2024'
    }
  ]);

  const [pendingReviews] = useState<Review[]>([
    {
      id: 4,
      author: 'new_client',
      displayName: 'ProGamer',
      text: 'Заказывал систему кланов, всё супер! Работает без лагов.',
      project: 'Система кланов',
      date: '18 декабря 2024',
      approved: false
    }
  ]);

  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [adminComment, setAdminComment] = useState('');

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-foreground py-20">
      <div className="fixed inset-0 grid-pattern opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12">
          <Badge className="mb-6 bg-red-500/20 text-red-500 border-red-500/30 px-4 py-1">
            <Icon name="Shield" size={14} className="mr-2" />
            Административная панель
          </Badge>
          <h1 className="text-4xl font-bold mb-4 minecraft-text">Панель управления</h1>
          <p className="text-muted-foreground text-lg">Управление заказами, отзывами и статистикой студии</p>
        </div>

        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="orders">
              <Icon name="Package" size={16} className="mr-2" />
              Заказы
            </TabsTrigger>
            <TabsTrigger value="reviews">
              <Icon name="MessageSquare" size={16} className="mr-2" />
              Отзывы
            </TabsTrigger>
            <TabsTrigger value="stats">
              <Icon name="BarChart3" size={16} className="mr-2" />
              Статистика
            </TabsTrigger>
            <TabsTrigger value="archive">
              <Icon name="Archive" size={16} className="mr-2" />
              Архив
            </TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="mt-6">
            <Card className="bg-card/80 border-primary/20">
              <CardHeader>
                <CardTitle>Активные заказы</CardTitle>
                <CardDescription>Управление текущими проектами</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Клиент</TableHead>
                      <TableHead>Проект</TableHead>
                      <TableHead>Тип</TableHead>
                      <TableHead>Статус</TableHead>
                      <TableHead>Прогресс</TableHead>
                      <TableHead>Дедлайн</TableHead>
                      <TableHead>Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-mono">#{order.id}</TableCell>
                        <TableCell className="font-bold">{order.clientName}</TableCell>
                        <TableCell>{order.projectName}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{order.projectType}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={order.status === 'В разработке' ? 'default' : 'secondary'}>
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-20 bg-secondary rounded-full h-2">
                              <div 
                                className="bg-primary h-2 rounded-full transition-all" 
                                style={{ width: `${order.progress}%` }}
                              />
                            </div>
                            <span className="text-xs">{order.progress}%</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-sm">{order.deadline}</TableCell>
                        <TableCell>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => setSelectedOrder(order)}
                          >
                            <Icon name="Edit" size={14} className="mr-1" />
                            Открыть
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                {selectedOrder && (
                  <Card className="mt-6 bg-secondary/50 border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-xl">Детали заказа #{selectedOrder.id}</CardTitle>
                      <CardDescription>{selectedOrder.projectName}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label className="text-sm text-muted-foreground">Требования клиента:</Label>
                        <p className="mt-2 p-3 bg-background rounded-lg text-sm">{selectedOrder.requirements}</p>
                      </div>
                      
                      <div>
                        <Label htmlFor="admin-comment">Комментарий для клиента:</Label>
                        <Textarea 
                          id="admin-comment"
                          placeholder="Добавьте обновление статуса или комментарий..."
                          className="mt-2"
                          value={adminComment}
                          onChange={(e) => setAdminComment(e.target.value)}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label htmlFor="update-status">Изменить статус:</Label>
                          <Input 
                            id="update-status" 
                            placeholder="Новый статус" 
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="update-progress">Обновить прогресс:</Label>
                          <Input 
                            id="update-progress" 
                            type="number" 
                            placeholder="0-100" 
                            className="mt-2"
                          />
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Button className="bg-primary hover:bg-primary/90">
                          <Icon name="Save" size={16} className="mr-2" />
                          Сохранить изменения
                        </Button>
                        <Button variant="outline" onClick={() => setSelectedOrder(null)}>
                          Закрыть
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card className="bg-card/80 border-primary/20">
              <CardHeader>
                <CardTitle>Модерация отзывов</CardTitle>
                <CardDescription>Отзывы, ожидающие одобрения</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingReviews.map((review) => (
                    <Card key={review.id} className="bg-secondary/50 border-primary/20">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{review.displayName}</CardTitle>
                            <CardDescription>@{review.author} • {review.project}</CardDescription>
                          </div>
                          <Badge variant="outline" className="border-yellow-500/30 text-yellow-500">
                            На модерации
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm mb-4">{review.text}</p>
                        <div className="flex gap-3">
                          <Button size="sm" className="bg-[#10B981] hover:bg-[#10B981]/90">
                            <Icon name="CheckCircle2" size={16} className="mr-2" />
                            Одобрить
                          </Button>
                          <Button size="sm" variant="destructive">
                            <Icon name="X" size={16} className="mr-2" />
                            Отклонить
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card/80 border-primary/20">
                <CardHeader>
                  <CardTitle>Статистика заказов</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Всего выполнено:</span>
                      <span className="text-2xl font-bold text-[#10B981]">127</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">В разработке:</span>
                      <span className="text-2xl font-bold text-yellow-500">18</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Новых за месяц:</span>
                      <span className="text-2xl font-bold text-primary">23</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 border-primary/20">
                <CardHeader>
                  <CardTitle>Быстрые действия</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить новый заказ
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Icon name="Upload" size={16} className="mr-2" />
                    Загрузить в архив
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Icon name="FileText" size={16} className="mr-2" />
                    Экспорт отчёта
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="archive" className="mt-6">
            <Card className="bg-card/80 border-primary/20">
              <CardHeader>
                <CardTitle>Управление архивом</CardTitle>
                <CardDescription>Загрузка файлов в публичный архив решений</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-primary/20 rounded-lg p-12 text-center">
                  <Icon name="Upload" size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground mb-4">Перетащите файлы сюда или нажмите для выбора</p>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Icon name="FileUp" size={16} className="mr-2" />
                    Выбрать файлы
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
