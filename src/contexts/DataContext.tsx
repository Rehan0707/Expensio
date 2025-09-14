import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useToast } from './ToastContext';

export interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  salary: number;
  status: 'active' | 'inactive';
  joinDate: string;
  attendance: number;
  performance: 'Excellent' | 'Good' | 'Average' | 'Poor';
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  totalSpent: number;
  orders: number;
  loyaltyPoints: number;
  segment: 'VIP' | 'Premium' | 'Regular';
  lastOrder: string;
  satisfaction: number;
}

export interface Transaction {
  id: number;
  type: 'income' | 'expense';
  description: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending';
  category: string;
}

export interface Invoice {
  id: string;
  client: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  dueDate: string;
  issueDate: string;
}

interface DataContextType {
  // Employees
  employees: Employee[];
  addEmployee: (employee: Omit<Employee, 'id'>) => void;
  updateEmployee: (id: number, employee: Partial<Employee>) => void;
  deleteEmployee: (id: number) => void;

  // Customers
  customers: Customer[];
  addCustomer: (customer: Omit<Customer, 'id'>) => void;
  updateCustomer: (id: number, customer: Partial<Customer>) => void;
  deleteCustomer: (id: number) => void;

  // Transactions
  transactions: Transaction[];
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
  updateTransaction: (id: number, transaction: Partial<Transaction>) => void;
  deleteTransaction: (id: number) => void;

  // Invoices
  invoices: Invoice[];
  addInvoice: (invoice: Omit<Invoice, 'id'>) => void;
  updateInvoice: (id: string, invoice: Partial<Invoice>) => void;
  deleteInvoice: (id: string) => void;

  // Loading states
  isLoading: boolean;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

const STORAGE_KEYS = {
  EMPLOYEES: 'smartbusiness_employees',
  CUSTOMERS: 'smartbusiness_customers',
  TRANSACTIONS: 'smartbusiness_transactions',
  INVOICES: 'smartbusiness_invoices',
};

const defaultEmployees: Employee[] = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Software Engineer',
    department: 'Technology',
    salary: 75000,
    status: 'active',
    joinDate: '2023-01-15',
    attendance: 95,
    performance: 'Excellent'
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Marketing Manager',
    department: 'Marketing',
    salary: 65000,
    status: 'active',
    joinDate: '2023-03-20',
    attendance: 92,
    performance: 'Good'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    position: 'Sales Representative',
    department: 'Sales',
    salary: 45000,
    status: 'active',
    joinDate: '2023-06-10',
    attendance: 88,
    performance: 'Good'
  }
];

const defaultCustomers: Customer[] = [
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

const defaultTransactions: Transaction[] = [
  { id: 1, type: 'income', description: 'Payment from ABC Corp', amount: 25000, date: '2024-01-15', status: 'completed', category: 'Sales' },
  { id: 2, type: 'expense', description: 'Office Supplies', amount: 3500, date: '2024-01-14', status: 'completed', category: 'Operations' },
  { id: 3, type: 'expense', description: 'Marketing Campaign', amount: 15000, date: '2024-01-13', status: 'pending', category: 'Marketing' },
  { id: 4, type: 'income', description: 'Consulting Services', amount: 45000, date: '2024-01-12', status: 'completed', category: 'Services' }
];

const defaultInvoices: Invoice[] = [
  { id: 'INV-001', client: 'TechCorp Ltd', amount: 85000, status: 'paid', dueDate: '2024-01-20', issueDate: '2024-01-05' },
  { id: 'INV-002', client: 'StartupXYZ', amount: 32000, status: 'pending', dueDate: '2024-01-25', issueDate: '2024-01-10' },
  { id: 'INV-003', client: 'Enterprise Co', amount: 125000, status: 'overdue', dueDate: '2024-01-15', issueDate: '2023-12-30' }
];

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { addToast } = useToast();
  const [isLoading, setIsLoading] = useState(true);

  // State for all data
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  // Load data from localStorage on mount
  useEffect(() => {
    const loadData = () => {
      try {
        const savedEmployees = localStorage.getItem(STORAGE_KEYS.EMPLOYEES);
        const savedCustomers = localStorage.getItem(STORAGE_KEYS.CUSTOMERS);
        const savedTransactions = localStorage.getItem(STORAGE_KEYS.TRANSACTIONS);
        const savedInvoices = localStorage.getItem(STORAGE_KEYS.INVOICES);

        setEmployees(savedEmployees ? JSON.parse(savedEmployees) : defaultEmployees);
        setCustomers(savedCustomers ? JSON.parse(savedCustomers) : defaultCustomers);
        setTransactions(savedTransactions ? JSON.parse(savedTransactions) : defaultTransactions);
        setInvoices(savedInvoices ? JSON.parse(savedInvoices) : defaultInvoices);
      } catch (error) {
        console.error('Error loading data from localStorage:', error);
        addToast({
          type: 'error',
          title: 'Data Loading Error',
          message: 'Failed to load saved data. Using default data.'
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [addToast]);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(STORAGE_KEYS.EMPLOYEES, JSON.stringify(employees));
    }
  }, [employees, isLoading]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(STORAGE_KEYS.CUSTOMERS, JSON.stringify(customers));
    }
  }, [customers, isLoading]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(transactions));
    }
  }, [transactions, isLoading]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(STORAGE_KEYS.INVOICES, JSON.stringify(invoices));
    }
  }, [invoices, isLoading]);

  // Employee functions
  const addEmployee = useCallback((employee: Omit<Employee, 'id'>) => {
    const newEmployee: Employee = {
      ...employee,
      id: Math.max(...employees.map(e => e.id), 0) + 1
    };
    setEmployees(prev => [...prev, newEmployee]);
    addToast({
      type: 'success',
      title: 'Employee Added',
      message: `${newEmployee.name} has been added successfully.`
    });
  }, [employees, addToast]);

  const updateEmployee = useCallback((id: number, employee: Partial<Employee>) => {
    setEmployees(prev => prev.map(emp => emp.id === id ? { ...emp, ...employee } : emp));
    addToast({
      type: 'success',
      title: 'Employee Updated',
      message: 'Employee information has been updated successfully.'
    });
  }, [addToast]);

  const deleteEmployee = useCallback((id: number) => {
    const employee = employees.find(emp => emp.id === id);
    setEmployees(prev => prev.filter(emp => emp.id !== id));
    addToast({
      type: 'success',
      title: 'Employee Deleted',
      message: `${employee?.name || 'Employee'} has been removed successfully.`
    });
  }, [employees, addToast]);

  // Customer functions
  const addCustomer = useCallback((customer: Omit<Customer, 'id'>) => {
    const newCustomer: Customer = {
      ...customer,
      id: Math.max(...customers.map(c => c.id), 0) + 1
    };
    setCustomers(prev => [...prev, newCustomer]);
    addToast({
      type: 'success',
      title: 'Customer Added',
      message: `${newCustomer.name} has been added successfully.`
    });
  }, [customers, addToast]);

  const updateCustomer = useCallback((id: number, customer: Partial<Customer>) => {
    setCustomers(prev => prev.map(cust => cust.id === id ? { ...cust, ...customer } : cust));
    addToast({
      type: 'success',
      title: 'Customer Updated',
      message: 'Customer information has been updated successfully.'
    });
  }, [addToast]);

  const deleteCustomer = useCallback((id: number) => {
    const customer = customers.find(cust => cust.id === id);
    setCustomers(prev => prev.filter(cust => cust.id !== id));
    addToast({
      type: 'success',
      title: 'Customer Deleted',
      message: `${customer?.name || 'Customer'} has been removed successfully.`
    });
  }, [customers, addToast]);

  // Transaction functions
  const addTransaction = useCallback((transaction: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Math.max(...transactions.map(t => t.id), 0) + 1
    };
    setTransactions(prev => [...prev, newTransaction]);
    addToast({
      type: 'success',
      title: 'Transaction Added',
      message: 'Transaction has been recorded successfully.'
    });
  }, [transactions, addToast]);

  const updateTransaction = useCallback((id: number, transaction: Partial<Transaction>) => {
    setTransactions(prev => prev.map(t => t.id === id ? { ...t, ...transaction } : t));
    addToast({
      type: 'success',
      title: 'Transaction Updated',
      message: 'Transaction has been updated successfully.'
    });
  }, [addToast]);

  const deleteTransaction = useCallback((id: number) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
    addToast({
      type: 'success',
      title: 'Transaction Deleted',
      message: 'Transaction has been removed successfully.'
    });
  }, [addToast]);

  // Invoice functions
  const addInvoice = useCallback((invoice: Omit<Invoice, 'id'>) => {
    const newInvoice: Invoice = {
      ...invoice,
      id: `INV-${String(Math.max(...invoices.map(i => parseInt(i.id.split('-')[1]) || 0), 0) + 1).padStart(3, '0')}`
    };
    setInvoices(prev => [...prev, newInvoice]);
    addToast({
      type: 'success',
      title: 'Invoice Created',
      message: `Invoice ${newInvoice.id} has been created successfully.`
    });
  }, [invoices, addToast]);

  const updateInvoice = useCallback((id: string, invoice: Partial<Invoice>) => {
    setInvoices(prev => prev.map(inv => inv.id === id ? { ...inv, ...invoice } : inv));
    addToast({
      type: 'success',
      title: 'Invoice Updated',
      message: 'Invoice has been updated successfully.'
    });
  }, [addToast]);

  const deleteInvoice = useCallback((id: string) => {
    setInvoices(prev => prev.filter(inv => inv.id !== id));
    addToast({
      type: 'success',
      title: 'Invoice Deleted',
      message: 'Invoice has been removed successfully.'
    });
  }, [addToast]);

  const value: DataContextType = {
    employees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    customers,
    addCustomer,
    updateCustomer,
    deleteCustomer,
    transactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    invoices,
    addInvoice,
    updateInvoice,
    deleteInvoice,
    isLoading
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};


