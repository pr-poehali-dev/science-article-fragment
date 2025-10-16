import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Index = () => {
  const [activeTab, setActiveTab] = useState('articles');

  const satelliteData = [
    { year: '2015', launches: 87, success: 82 },
    { year: '2017', launches: 95, success: 91 },
    { year: '2019', launches: 103, success: 99 },
    { year: '2021', launches: 146, success: 142 },
    { year: '2023', launches: 223, success: 218 },
  ];

  const fuelTypeData = [
    { name: 'Твердое топливо', value: 35, color: '#2563EB' },
    { name: 'Жидкое топливо', value: 45, color: '#F59E0B' },
    { name: 'Гибридное', value: 12, color: '#DC2626' },
    { name: 'Ионные двигатели', value: 8, color: '#10B981' },
  ];

  const authors = [
    {
      id: 1,
      name: 'Доктор Анна Соколова',
      role: 'Ведущий исследователь космических технологий',
      image: 'https://cdn.poehali.dev/projects/562f9243-621b-416e-9edf-da213026270f/files/da575740-8034-4653-be14-11494aa4d0f3.jpg',
      bio: 'Специалист по орбитальной механике с 15-летним опытом работы в Роскосмосе. Участвовала в разработке систем управления для более чем 30 космических миссий.',
      articles: 24,
      citations: 1847
    },
    {
      id: 2,
      name: 'Профессор Дмитрий Волков',
      role: 'Специалист по ракетным двигателям',
      image: 'https://cdn.poehali.dev/projects/562f9243-621b-416e-9edf-da213026270f/files/d2f30da6-7aa5-410e-b17e-651c2bbf4fef.jpg',
      bio: 'Руководитель лаборатории передовых двигательных установок. Автор революционной технологии многоразовых ракетных двигателей нового поколения.',
      articles: 31,
      citations: 2156
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                <Icon name="Atom" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  SCIENCE MAGAZINE
                </h1>
                <p className="text-sm text-muted-foreground">Научные статьи и исследования</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Bell" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-12">
            <TabsTrigger value="articles" className="text-base">
              <Icon name="BookOpen" size={18} className="mr-2" />
              Статьи
            </TabsTrigger>
            <TabsTrigger value="authors" className="text-base">
              <Icon name="Users" size={18} className="mr-2" />
              Авторы
            </TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="space-y-8 animate-fade-in">
            <Card className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/562f9243-621b-416e-9edf-da213026270f/files/289d0c0e-0aaa-432d-b2e5-7bdbc1887b5a.jpg" 
                  alt="Космические технологии" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-primary text-white">
                  <Icon name="Rocket" size={14} className="mr-1" />
                  Космические технологии
                </Badge>
              </div>
              
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={authors[0].image} />
                      <AvatarFallback>АС</AvatarFallback>
                    </Avatar>
                    <span>{authors[0].name}</span>
                  </div>
                  <span>•</span>
                  <span>15 октября 2025</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    12 мин чтения
                  </span>
                </div>
                
                <CardTitle className="text-4xl leading-tight">
                  Революция в космических технологиях: новая эра исследования околоземной орбиты
                </CardTitle>
                
                <CardDescription className="text-lg leading-relaxed">
                  Подробный анализ современных достижений в области космической инженерии и их влияние на будущее человечества
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-8">
                <div className="prose prose-lg max-w-none space-y-6 text-foreground/90 leading-relaxed">
                  <p className="text-xl font-medium text-primary">
                    Космические технологии переживают беспрецедентный период развития, который сравним разве что с началом космической эры в середине XX века.
                  </p>
                  
                  <p>
                    За последние десять лет количество запусков спутников увеличилось более чем в два раза, а стоимость вывода полезной нагрузки на орбиту снизилась почти в десять раз благодаря инновационным технологиям многоразового использования ракет-носителей. Современные космические аппараты оснащаются всё более совершенными системами управления, которые позволяют им выполнять сложнейшие маневры с точностью до миллиметра.
                  </p>
                  
                  <p>
                    Одним из ключевых направлений развития стала миниатюризация спутниковых систем. Появление класса малых спутников, известных как CubeSats, революционизировало подход к космическим исследованиям. Эти компактные аппараты, размером не больше обувной коробки, способны выполнять задачи, которые ранее требовали использования огромных и дорогостоящих спутников. Технология позволила университетам и небольшим компаниям получить доступ к космическим исследованиям, что ранее было привилегией исключительно государственных космических агентств.
                  </p>
                  
                  <p>
                    Параллельно с миниатюризацией развивается и противоположное направление – создание мегаконстелляций спутников. Проекты по развертыванию тысяч спутников на низкой околоземной орбите обещают обеспечить глобальное покрытие высокоскоростным интернетом даже в самых отдаленных уголках планеты. Эти системы используют передовые технологии межспутниковой связи с помощью лазерных каналов передачи данных, что обеспечивает скорость передачи информации в несколько терабит в секунду.
                  </p>
                  
                  <p>
                    Революционные изменения происходят и в области двигательных установок. Традиционные химические ракетные двигатели постепенно дополняются электрореактивными системами, которые обеспечивают значительно больший удельный импульс при меньшем расходе топлива. Ионные двигатели, работающие на ксеноне или криптоне, уже активно используются для коррекции орбит спутников связи и позволяют существенно продлить срок их активной эксплуатации.
                  </p>

                  <div className="my-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-xl">
                    <p className="text-lg italic text-primary font-medium">
                      "Следующее десятилетие станет решающим для определения направления развития космической индустрии на ближайшие пятьдесят лет"
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">— Доктор Анна Соколова</p>
                  </div>

                  <p>
                    Особое внимание уделяется разработке систем автономного управления космическими аппаратами. Искусственный интеллект и машинное обучение позволяют спутникам самостоятельно принимать решения в критических ситуациях, не дожидаясь команд с Земли. Это особенно важно для миссий в дальний космос, где задержка сигнала может составлять десятки минут. Современные алгоритмы способны анализировать данные с научных инструментов в реальном времени и корректировать программу наблюдений для максимизации научной отдачи от миссии.
                  </p>
                  
                  <p>
                    Материаловедение играет критическую роль в развитии космических технологий. Новые композитные материалы на основе углеродного волокна позволяют создавать конструкции, которые в несколько раз легче традиционных алюминиевых, при этом обладая сопоставимой или даже большей прочностью. Разработка термозащитных покрытий нового поколения обеспечивает надежную защиту от экстремальных температур и космического излучения, что критически важно для долгосрочных орбитальных миссий.
                  </p>
                  
                  <p>
                    Проблема космического мусора становится всё более актуальной по мере увеличения количества объектов на орбите. Инженеры разрабатывают инновационные решения, включая системы активного удаления отработавших спутников с орбиты, технологии самоуничтожения космических аппаратов после завершения миссии, и даже специализированные спутники-уборщики, способные захватывать и утилизировать крупные фрагменты космического мусора. Эти технологии необходимы для обеспечения долгосрочной устойчивости космической деятельности.
                  </p>
                  
                  <p>
                    Коммерциализация космоса открывает новые возможности для научных исследований и практического применения космических технологий. Частные компании инвестируют миллиарды долларов в разработку новых технологий, от космического туризма до добычи ресурсов на астероидах. Снижение стоимости доступа к космосу делает реальными проекты, которые еще недавно казались фантастикой, включая создание орбитальных производственных площадок и космических солнечных электростанций.
                  </p>
                  
                  <p>
                    Международное сотрудничество остается важнейшим фактором успеха космических программ. Совместные проекты позволяют объединять экспертизу и ресурсы различных стран, снижая риски и затраты при реализации амбициозных миссий. Международная космическая станция служит прекрасным примером того, чего можно достичь благодаря координации усилий множества государств и организаций. Текущие планы по созданию лунной орбитальной станции Gateway продолжают эту традицию международного партнерства.
                  </p>
                  
                  <p>
                    Научное сообщество с нетерпением ожидает результатов новых космических миссий, которые должны расширить наше понимание Вселенной. Запланированные телескопы следующего поколения, работающие в различных диапазонах электромагнитного спектра, обещают революционные открытия в области астрофизики и космологии. Миссии к дальним планетам и их спутникам могут предоставить ключевые данные о возможности существования жизни за пределами Земли.
                  </p>
                  
                  <p>
                    Образовательные инициативы в области космических технологий привлекают всё больше молодых специалистов в эту захватывающую сферу. Университеты по всему миру открывают специализированные программы по космической инженерии, а студенческие команды получают возможность создавать и запускать собственные спутники. Это обеспечивает приток свежих идей и талантов, необходимых для решения сложных технических задач будущего.
                  </p>
                  
                  <p>
                    Этические вопросы использования космического пространства также выходят на первый план. Необходимость разработки международных норм и правил, регулирующих коммерческую деятельность в космосе, становится всё более очевидной. Обсуждаются вопросы справедливого распределения орбитальных ресурсов, предотвращения милитаризации космоса и защиты уникальных небесных тел от необратимого антропогенного воздействия.
                  </p>
                  
                  <p>
                    Технологии дистанционного зондирования Земли из космоса находят всё более широкое применение в повседневной жизни. Спутниковые данные используются для мониторинга климатических изменений, прогнозирования погоды, управления сельским хозяйством, контроля за состоянием лесов и океанов, планирования городской застройки и реагирования на чрезвычайные ситуации. Точность и детальность получаемой информации постоянно улучшаются благодаря совершенствованию сенсорных технологий и методов обработки данных.
                  </p>
                  
                  <p>
                    Квантовые технологии начинают проникать в космическую отрасль, обещая революционные изменения в системах связи и навигации. Квантовое шифрование может обеспечить абсолютно защищенную передачу данных, что критически важно для военных и коммерческих приложений. Квантовые сенсоры обладают беспрецедентной чувствительностью и могут использоваться для точнейших измерений гравитационного поля Земли и других планет.
                  </p>
                  
                  <p>
                    Биотехнологии в космосе открывают новые горизонты для медицинских исследований и разработки новых лекарственных препаратов. Условия микрогравитации позволяют проводить эксперименты, невозможные на Земле, и получать уникальные результаты в области выращивания кристаллов белков, клеточных культур и создания новых материалов. Эти исследования имеют огромный потенциал для улучшения качества жизни людей на нашей планете.
                  </p>
                  
                  <p>
                    Роботизированные системы становятся неотъемлемой частью космических исследований. Современные роботы способны выполнять сложнейшие операции в открытом космосе, проводить ремонтные работы на орбитальных станциях и осуществлять сборку крупногабаритных конструкций. Развитие технологий телеприсутствия позволяет операторам на Земле управлять роботами-аватарами на орбите с высокой степенью точности и естественности движений.
                  </p>
                  
                  <p>
                    Энергетические системы космических аппаратов также претерпевают значительные улучшения. Новые поколения солнечных батарей достигают эффективности преобразования более 40%, что вдвое превышает показатели технологий предыдущего десятилетия. Разрабатываются компактные ядерные энергетические установки для миссий в дальний космос, где солнечная энергия недоступна. Системы аккумулирования энергии на основе литий-ионных батарей обеспечивают надежное энергоснабжение спутников во время прохождения через тень Земли.
                  </p>
                  
                  <p>
                    Космическая медицина накапливает ценный опыт о влиянии факторов космического полета на человеческий организм. Долгосрочные исследования на МКС предоставляют уникальные данные о физиологических и психологических изменениях при длительном пребывании в невесомости. Эти знания критически важны для планирования будущих миссий к Марсу и другим планетам, где астронавты проведут месяцы или даже годы в условиях, радикально отличающихся от земных.
                  </p>
                  
                  <p>
                    Технологии производства в космосе могут радикально изменить промышленность будущего. Некоторые материалы и изделия, которые невозможно или очень сложно произвести на Земле из-за гравитации, могут быть изготовлены на орбите с уникальными свойствами. 3D-печать в условиях микрогравитации открывает возможности для создания сложных структур, которые найдут применение как в космосе, так и на Земле. Эксперименты по выращиванию сверхчистых кристаллов для полупроводниковой промышленности показывают многообещающие результаты.
                  </p>
                  
                  <p>
                    В заключение следует отметить, что мы находимся на пороге новой эры в освоении космоса. Технологические достижения последних лет создали прочную основу для реализации амбициозных проектов, которые еще недавно казались недостижимыми. Снижение стоимости запусков, миниатюризация оборудования, развитие искусственного интеллекта и робототехники, прогресс в материаловедении – все эти факторы работают синергетически, ускоряя темпы развития космической отрасли. Следующее десятилетие обещает стать периодом беспрецедентных достижений, которые не только расширят границы человеческого познания, но и принесут практическую пользу миллиардам людей на Земле.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <Card className="border-2 bg-gradient-to-br from-blue-50 to-white">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-primary">
                        <Icon name="TrendingUp" size={24} />
                        Динамика космических запусков
                      </CardTitle>
                      <CardDescription>Статистика успешных запусков 2015-2023</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={satelliteData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                          <XAxis dataKey="year" stroke="#64748B" />
                          <YAxis stroke="#64748B" />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: 'white', 
                              border: '2px solid #2563EB',
                              borderRadius: '0.75rem',
                              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                            }} 
                          />
                          <Legend />
                          <Line 
                            type="monotone" 
                            dataKey="launches" 
                            stroke="#2563EB" 
                            strokeWidth={3}
                            name="Всего запусков" 
                            dot={{ fill: '#2563EB', r: 5 }}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="success" 
                            stroke="#10B981" 
                            strokeWidth={3}
                            name="Успешные" 
                            dot={{ fill: '#10B981', r: 5 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card className="border-2 bg-gradient-to-br from-orange-50 to-white">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-secondary">
                        <Icon name="Flame" size={24} />
                        Типы ракетного топлива
                      </CardTitle>
                      <CardDescription>Распределение по используемым технологиям</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                          <Pie
                            data={fuelTypeData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {fuelTypeData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: 'white', 
                              border: '2px solid #F59E0B',
                              borderRadius: '0.75rem',
                              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  <Badge variant="secondary" className="px-4 py-2 text-sm">
                    <Icon name="Hash" size={14} className="mr-1" />
                    космическиетехнологии
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm">
                    <Icon name="Hash" size={14} className="mr-1" />
                    спутники
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm">
                    <Icon name="Hash" size={14} className="mr-1" />
                    инновации
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm">
                    <Icon name="Hash" size={14} className="mr-1" />
                    наука
                  </Badge>
                </div>

                <div className="flex items-center justify-between pt-8 border-t">
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm">
                      <Icon name="ThumbsUp" size={16} className="mr-2" />
                      243
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      18
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Share2" size={16} className="mr-2" />
                      Поделиться
                    </Button>
                  </div>
                  <Button variant="outline" size="sm">
                    <Icon name="Bookmark" size={16} className="mr-2" />
                    Сохранить
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="authors" className="space-y-6 animate-fade-in">
            {authors.map((author) => (
              <Card key={author.id} className="overflow-hidden border-2 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <Avatar className="w-32 h-32 border-4 border-primary/20">
                        <AvatarImage src={author.image} alt={author.name} />
                        <AvatarFallback className="text-2xl">{author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{author.name}</h3>
                        <p className="text-lg text-primary font-medium">{author.role}</p>
                      </div>
                      
                      <p className="text-foreground/80 leading-relaxed">
                        {author.bio}
                      </p>
                      
                      <div className="flex flex-wrap gap-6 pt-4">
                        <div className="flex items-center gap-2">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon name="FileText" size={24} className="text-primary" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary">{author.articles}</div>
                            <div className="text-sm text-muted-foreground">Статей</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                            <Icon name="Quote" size={24} className="text-secondary" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-secondary">{author.citations}</div>
                            <div className="text-sm text-muted-foreground">Цитирований</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-3 pt-4">
                        <Button className="bg-primary hover:bg-primary/90">
                          <Icon name="Mail" size={16} className="mr-2" />
                          Связаться
                        </Button>
                        <Button variant="outline">
                          <Icon name="User" size={16} className="mr-2" />
                          Профиль
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t bg-white/80 backdrop-blur-sm mt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">О журнале</h4>
              <p className="text-sm text-muted-foreground">
                Научно-популярный журнал о передовых исследованиях и технологиях
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Космос</li>
                <li>Физика</li>
                <li>Биология</li>
                <li>Технологии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Для авторов</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Публикация</li>
                <li>Требования</li>
                <li>Рецензирование</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Подписка</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Получайте новые статьи на почту
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="flex-1 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="sm">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2025 Science Magazine. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
