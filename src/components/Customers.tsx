import React, { useState } from 'react';
import { 
  Users, 
  Heart, 
  Gift, 
  MessageCircle, 
  Star,
  TrendingUp,
  UserPlus,
  Search,
  Filter,
  Phone,
  Mail,
  Plus
} from 'lucide-react';

const Customers: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'customers', label: 'Customers' },
    { id: 'loyalty', label: 'Loyalty Program' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'engagement', label: 'Engagement' }
  ];

  const customers = [
    {
      id: 1,
      name: 'Rahul Sharma',
      email: 'rahul@example.com',
      phone: '+91 9876543210',
      totalSpent: 45000,
      orders: 12,
      loyaltyPoints: 2250,
      segment: 'VIP',
      lastOrder: '2024-01-10',
      satisfaction: 4.8
    },
    {
      id: 2,
      name: 'Priya Patel',
      email: 'priya@example.com',
      phone: '+91 9876543211',
      totalSpent: 28000,
      orders: 8,
      loyaltyPoints: 1400,
      segment: 'Premium',
      lastOrder: '2024-01-12',
      satisfaction: 4.5
    },
    {
      id: 3,
      name: 'Amit Singh',
      email: 'amit@example.com',
      phone: '+91 9876543212',
      totalSpent: 15000,
      orders: 5,
      loyaltyPoints: 750,
      segment: 'Regular',
      lastOrder: '2024-01-08',
      satisfaction: 4.2
    }
  ];

  const loyaltyPrograms = [
    {
      id: 1,
      name: 'Bronze Tier',
      minSpent: 0,
      pointsMultiplier: 1,
      members: 450,
      benefits: ['1 point per ₹100 spent', 'Birthday discount']
    },
    {
      id: 2,
      name: 'Silver Tier',
      minSpent: 10000,
      pointsMultiplier: 1.5,
      members: 180,
      benefits: ['1.5 points per ₹100', 'Free shipping', 'Early access']
    },
    {
      id: 3,
      name: 'Gold Tier',
      minSpent: 25000,
      pointsMultiplier: 2,
      members: 95,
      benefits: ['2 points per ₹100', 'Priority support', 'Exclusive offers']
    }
  ];

  const reviews = [
    {
      id: 1,
      customerName: 'Rahul Sharma',
      rating: 5,
      comment: 'Excellent service and quality products!',
      product: 'Premium Headphones',
      date: '2024-01-10',
      sentiment: 'positive'
    },
    {
      id: 2,
      customerName: 'Priya Patel',
      rating: 4,
      comment: 'Good experience, fast delivery.',
      product: 'Smartphone Case',
      date: '2024-01-09',
      sentiment: 'positive'
    },
    {
      id: 3,
      customerName: 'Amit Singh',
      rating: 3,
      comment: 'Product is okay, could be better.',
      product: 'Bluetooth Speaker',
      date: '2024-01-08',
      sentiment: 'neutral'
    }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Customer KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30">
              <Users className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <span className="text-sm font-medium text-blue-600">+12%</span>
          </div>
          <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
            Total Customers
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">2,847</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/30">
              <Heart className="text-green-600 dark:text-green-400" size={24} />
            </div>
            <span className="text-sm font-medium text-green-600">+8.5%</span>
          </div>
          <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
            Loyalty Members
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">1,235</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-900/30">
              <Star className="text-purple-600 dark:text-purple-400" size={24} />
            </div>
            <span className="text-sm font-medium text-purple-600">4.6/5</span>
          </div>
          <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
            Avg. Rating
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">4.6</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-900/30">
              <TrendingUp className="text-orange-600 dark:text-orange-400" size={24} />
            </div>
            <span className="text-sm font-medium text-orange-600">+15.2%</span>
          </div>
          <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
            Customer LTV
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">₹18,450</p>
        </div>
      </div>

      {/* Customer Segments */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Customer Segments
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-4 text-white">
            <h4 className="font-semibold mb-2">VIP Customers</h4>
            <p className="text-2xl font-bold mb-1">95</p>
            <p className="text-yellow-100 text-sm">₹50,000+ spent</p>
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg p-4 text-white">
            <h4 className="font-semibold mb-2">Premium Customers</h4>
            <p className="text-2xl font-bold mb-1">285</p>
            <p className="text-blue-100 text-sm">₹25,000+ spent</p>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-4 text-white">
            <h4 className="font-semibold mb-2">Regular Customers</h4>
            <p className="text-2xl font-bold mb-1">2,467</p>
            <p className="text-green-100 text-sm">Active buyers</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Customer Activity
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm">
                R
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Rahul Sharma made a purchase
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</p>
              </div>
              <span className="text-sm font-medium text-green-600">₹2,500</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                P
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Priya Patel joined loyalty program
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm">
                A
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Amit Singh left a 5-star review
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">6 hours ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            AI Customer Insights
          </h3>
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                Retention Opportunity
              </h4>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                47 customers haven't purchased in 30 days. Consider targeted offers.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
              <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">
                Upsell Potential
              </h4>
              <p className="text-green-700 dark:text-green-300 text-sm">
                Premium customers show 73% interest in premium accessories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCustomers = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search customers..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
            <Filter size={20} />
            Filter
          </button>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <UserPlus size={20} />
          Add Customer
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Customer</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Contact</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Total Spent</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Orders</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Segment</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Satisfaction</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          {customer.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-gray-900 dark:text-white font-medium">{customer.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Last order: {customer.lastOrder}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Mail size={12} className="text-gray-400" />
                          <span className="text-xs text-gray-600 dark:text-gray-400">{customer.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone size={12} className="text-gray-400" />
                          <span className="text-xs text-gray-600 dark:text-gray-400">{customer.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">
                      ₹{customer.totalSpent.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-gray-900 dark:text-white">{customer.orders}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        customer.segment === 'VIP' 
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                          : customer.segment === 'Premium'
                          ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
                      }`}>
                        {customer.segment}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1">
                        <Star className="text-yellow-400 fill-current" size={14} />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {customer.satisfaction}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          View
                        </button>
                        <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                          Contact
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLoyalty = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Loyalty Program Management
        </h3>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          <Plus size={20} />
          Add Tier
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {loyaltyPrograms.map((tier, index) => (
          <div key={tier.id} className={`rounded-xl p-6 text-white ${
            index === 0 ? 'bg-gradient-to-br from-orange-400 to-yellow-500' :
            index === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-600' :
            'bg-gradient-to-br from-yellow-400 to-yellow-600'
          }`}>
            <h4 className="text-xl font-bold mb-2">{tier.name}</h4>
            <p className="text-lg mb-4">{tier.members} members</p>
            
            <div className="bg-white/20 rounded-lg p-3 mb-4">
              <p className="text-sm mb-2">Minimum spend: ₹{tier.minSpent.toLocaleString()}</p>
              <p className="text-sm">Points multiplier: {tier.pointsMultiplier}x</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Benefits:</p>
              {tier.benefits.map((benefit, idx) => (
                <p key={idx} className="text-xs text-white/90">• {benefit}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Loyalty Program Analytics
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">43%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Participation Rate</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">₹125</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Avg Points Value</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">28%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Redemption Rate</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'customers':
        return renderCustomers();
      case 'loyalty':
        return renderLoyalty();
      case 'reviews':
        return <div className="text-center text-gray-500 py-12">Customer reviews and feedback interface</div>;
      case 'engagement':
        return <div className="text-center text-gray-500 py-12">Customer engagement tools</div>;
      default:
        return renderOverview();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Customer Engagement & Growth
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Build lasting relationships and drive customer loyalty with AI insights
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      {renderContent()}
    </div>
  );
};

export default Customers;