import { useState, useEffect } from "react";
import axios from "../../axios";
import { ErrorToast } from "../../components/global/Toaster";
import { processError } from "../../lib/utils";

const useUsers = (url, currentPage = 1, update) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState("");

  const getUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}`);
      setData(data?.data?.data);
      setPagination(data?.data?.totalPages);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, [currentPage, update]);

  return { loading, data, pagination };
};

const useStories = (url, currentPage = 1, update) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}?page=${currentPage}&limit=10`);
      setData(data?.data?.stories);
      setPagination(data?.data?.totalPages);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, [currentPage, update]);

  return { loading, data, pagination };
};

const useUsersDetail = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}`);
      setData(data?.data);
      setPagination(data?.pagination);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return { loading, data, pagination };
};

const useFeedBack = (url, page, update) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getFeedBack = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}`);
      setData(data?.data);
      setPagination(data?.pagination);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFeedBack();
  }, [update]);

  return { loading, data, pagination };
};

const useAllSubject = (url, page, update) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getAllSubject = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}`);
      setData(data?.data?.data);
      setPagination(data?.pagination);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllSubject();
  }, [update]);

  return { loading, data, pagination };
};
export { useUsers, useStories, useUsersDetail, useFeedBack, useAllSubject };
