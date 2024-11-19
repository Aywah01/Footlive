import React, { useState } from "react";
import styles from "./home.module.css"; // Assume you have this CSS file

interface LastMatch {
  match: string;
  result: string;
}

interface UpcomingMatch {
  match: string;
}

interface WeekendMatch {
  match: string;
  day: string;
}

interface Team {
  position: number;
  club: string;
  logo: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  gd: number;
  points: number;
  form: string[];
  next: string;
  lastMatches: LastMatch[];
  upcomingMatches: UpcomingMatch[];
  weekendMatch: WeekendMatch;
}

interface League {
  name: string;
  logo: string;
  teams: Team[];
  fixtures: { match: string; date: string }[];
}

const Home: React.FC = () => {
  // Sample data for league standings and fixtures
  const leagues = [
    {
      name: "Premier League",
      teams: [
        {
          position: 1,
          club: "Liverpool",
          played: 11,
          won: 9,
          drawn: 1,
          lost: 1,
          gf: 21,
          ga: 6,
          gd: 15,
          points: 28,
          form: ["W", "D", "W", "W"],
          next: "Southampton",
          lastMatches: [
            { match: "Liverpool vs. Manchester City", result: "2-2" },
            { match: "Liverpool vs. Chelsea", result: "1-0" },
          ],
          upcomingMatches: [
            { match: "Liverpool vs. Wolverhampton Wanderers" },
            { match: "Liverpool vs. Everton" },
          ],
          weekendMatch: {
            match: "Liverpool vs. Newcastle United",
            day: "Saturday",
          },
        },
        {
          position: 2,
          club: "Manchester City",
          played: 11,
          won: 7,
          drawn: 2,
          lost: 2,
          gf: 22,
          ga: 13,
          gd: 9,
          points: 23,
          form: ["W", "L", "W", "L"],
          next: "Spurs",
        },
        {
          position: 3,
          club: "Chelsea",
          played: 11,
          won: 5,
          drawn: 4,
          lost: 2,
          gf: 21,
          ga: 13,
          gd: 8,
          points: 19,
          form: ["D", "W", "D", "D"],
          next: "Brighton",
        },
        {
          position: 4,
          club: "Arsenal",
          played: 11,
          won: 5,
          drawn: 4,
          lost: 2,
          gf: 18,
          ga: 12,
          gd: 6,
          points: 19,
          form: ["W", "D", "L", "D"],
          next: "Nottingham Forest",
        },
        {
          position: 5,
          club: "Nottingham Forest",
          played: 11,
          won: 5,
          drawn: 4,
          lost: 2,
          gf: 15,
          ga: 10,
          gd: 5,
          points: 19,
          form: ["W", "W", "D", "L"],
          next: "Arsenal",
        },
        {
          position: 6,
          club: "Brighton",
          played: 11,
          won: 5,
          drawn: 4,
          lost: 2,
          gf: 15,
          ga: 14,
          gd: 1,
          points: 19,
          form: ["L", "W", "W", "D"],
          next: "Fulham",
        },
        {
          position: 7,
          club: "Fulham",
          played: 11,
          won: 5,
          drawn: 3,
          lost: 3,
          gf: 13,
          ga: 9,
          gd: 4,
          points: 18,
          form: ["W", "D", "L", "W"],
          next: "Wolves",
        },
        {
          position: 8,
          club: "Newcastle United",
          played: 11,
          won: 5,
          drawn: 3,
          lost: 3,
          gf: 20,
          ga: 15,
          gd: 5,
          points: 18,
          form: ["W", "L", "W", "D"],
          next: "West Ham",
        },
        {
          position: 9,
          club: "Aston Villa",
          played: 11,
          won: 5,
          drawn: 3,
          lost: 3,
          gf: 18,
          ga: 13,
          gd: 5,
          points: 18,
          form: ["D", "W", "L", "L"],
          next: "Crystal Palace",
        },
        {
          position: 10,
          club: "Tottenham Hotspur",
          played: 11,
          won: 4,
          drawn: 4,
          lost: 3,
          gf: 14,
          ga: 12,
          gd: 2,
          points: 16,
          form: ["W", "L", "D", "L"],
          next: "Man City",
        },
        {
          position: 11,
          club: "West Ham",
          played: 11,
          won: 4,
          drawn: 3,
          lost: 4,
          gf: 13,
          ga: 14,
          gd: -1,
          points: 15,
          form: ["L", "W", "D", "W"],
          next: "Newcastle",
        },
        {
          position: 12,
          club: "Crystal Palace",
          played: 11,
          won: 3,
          drawn: 5,
          lost: 3,
          gf: 10,
          ga: 10,
          gd: 0,
          points: 14,
          form: ["D", "D", "L", "W"],
          next: "Aston Villa",
        },
        {
          position: 13,
          club: "Brentford",
          played: 11,
          won: 3,
          drawn: 4,
          lost: 4,
          gf: 12,
          ga: 14,
          gd: -2,
          points: 13,
          form: ["L", "D", "W", "L"],
          next: "Everton",
        },
        {
          position: 14,
          club: "Everton",
          played: 11,
          won: 3,
          drawn: 3,
          lost: 5,
          gf: 10,
          ga: 12,
          gd: -2,
          points: 12,
          form: ["W", "D", "L", "L"],
          next: "Brentford",
        },
        {
          position: 15,
          club: "Wolves",
          played: 11,
          won: 3,
          drawn: 3,
          lost: 5,
          gf: 11,
          ga: 17,
          gd: -6,
          points: 12,
          form: ["D", "L", "W", "W"],
          next: "Fulham",
        },
        {
          position: 16,
          club: "Southampton",
          played: 11,
          won: 3,
          drawn: 2,
          lost: 6,
          gf: 12,
          ga: 18,
          gd: -6,
          points: 11,
          form: ["W", "L", "L", "L"],
          next: "Liverpool",
        },
        {
          position: 17,
          club: "Bournemouth",
          played: 11,
          won: 2,
          drawn: 3,
          lost: 6,
          gf: 9,
          ga: 16,
          gd: -7,
          points: 9,
          form: ["L", "W", "L", "L"],
          next: "Brighton",
        },
        {
          position: 18,
          club: "Leeds United",
          played: 11,
          won: 2,
          drawn: 3,
          lost: 6,
          gf: 8,
          ga: 17,
          gd: -9,
          points: 9,
          form: ["L", "D", "L", "L"],
          next: "Chelsea",
        },
        {
          position: 19,
          club: "Burnley",
          played: 11,
          won: 1,
          drawn: 2,
          lost: 8,
          gf: 6,
          ga: 21,
          gd: -15,
          points: 5,
          form: ["L", "L", "D", "L"],
          next: "Arsenal",
        },
        {
          position: 20,
          club: "Sheffield United",
          played: 11,
          won: 0,
          drawn: 1,
          lost: 10,
          gf: 4,
          ga: 23,
          gd: -19,
          points: 1,
          form: ["L", "L", "L", "L"],
          next: "Everton",
        },
      ],
      fixtures: [
        { match: "Leicester City vs Chelsea", date: "2024-11-23" },
        { match: "Fulham vs Wolves", date: "2024-11-24" },
        { match: "Everton vs Brentford", date: "2024-11-24" },
        { match: "Arsenal vs Nottm Forest", date: "2024-11-24" },
        { match: "Bournemouth vs Brighton", date: "2024-11-24" },
        { match: "Aston Villa vs Crystal Palace", date: "2024-11-24" },
        { match: "Man City vs Tottenham", date: "2024-11-24" },
        { match: "Southampton vs Liverpool", date: "2024-11-24" },
        { match: "Ipswich Town vs Man United", date: "2024-11-25" },
        { match: "Newcastle vs West Ham", date: "2024-11-26" },
      ],
    },
    {
      name: "La Liga",
      teams: [
        {
          position: 1,
          club: "Real Madrid",
          played: 11,
          won: 9,
          drawn: 1,
          lost: 1,
          gf: 25,
          ga: 9,
          gd: 16,
          points: 28,
          form: ["W", "W", "D", "W"],
          next: "Getafe",
        },
        {
          position: 2,
          club: "Barcelona",
          played: 11,
          won: 8,
          drawn: 2,
          lost: 1,
          gf: 24,
          ga: 10,
          gd: 14,
          points: 26,
          form: ["W", "W", "L", "W"],
          next: "Real Betis",
        },
        {
          position: 3,
          club: "Atletico Madrid",
          played: 11,
          won: 7,
          drawn: 3,
          lost: 1,
          gf: 22,
          ga: 12,
          gd: 10,
          points: 24,
          form: ["D", "W", "W", "D"],
          next: "Sevilla",
        },
        {
          position: 4,
          club: "Real Sociedad",
          played: 11,
          won: 6,
          drawn: 4,
          lost: 1,
          gf: 20,
          ga: 11,
          gd: 9,
          points: 22,
          form: ["W", "W", "D", "L"],
          next: "Granada",
        },
        {
          position: 5,
          club: "Villarreal",
          played: 11,
          won: 6,
          drawn: 3,
          lost: 2,
          gf: 18,
          ga: 13,
          gd: 5,
          points: 21,
          form: ["L", "W", "W", "D"],
          next: "Osasuna",
        },
        {
          position: 6,
          club: "Real Betis",
          played: 11,
          won: 5,
          drawn: 4,
          lost: 2,
          gf: 17,
          ga: 12,
          gd: 5,
          points: 19,
          form: ["W", "D", "L", "W"],
          next: "Barcelona",
        },
        {
          position: 7,
          club: "Athletic Bilbao",
          played: 11,
          won: 5,
          drawn: 3,
          lost: 3,
          gf: 16,
          ga: 14,
          gd: 2,
          points: 18,
          form: ["L", "W", "D", "W"],
          next: "Cadiz",
        },
        {
          position: 8,
          club: "Sevilla",
          played: 11,
          won: 5,
          drawn: 2,
          lost: 4,
          gf: 14,
          ga: 12,
          gd: 2,
          points: 17,
          form: ["W", "L", "W", "L"],
          next: "Atletico Madrid",
        },
        {
          position: 9,
          club: "Osasuna",
          played: 11,
          won: 4,
          drawn: 4,
          lost: 3,
          gf: 15,
          ga: 14,
          gd: 1,
          points: 16,
          form: ["W", "D", "L", "W"],
          next: "Villarreal",
        },
        {
          position: 10,
          club: "Getafe",
          played: 11,
          won: 4,
          drawn: 3,
          lost: 4,
          gf: 12,
          ga: 13,
          gd: -1,
          points: 15,
          form: ["D", "L", "W", "W"],
          next: "Real Madrid",
        },
        {
          position: 11,
          club: "Mallorca",
          played: 11,
          won: 4,
          drawn: 3,
          lost: 4,
          gf: 11,
          ga: 15,
          gd: -4,
          points: 15,
          form: ["W", "W", "L", "L"],
          next: "Celta Vigo",
        },
        {
          position: 12,
          club: "Granada",
          played: 11,
          won: 3,
          drawn: 4,
          lost: 4,
          gf: 13,
          ga: 18,
          gd: -5,
          points: 13,
          form: ["L", "W", "D", "L"],
          next: "Real Sociedad",
        },
        {
          position: 13,
          club: "Celta Vigo",
          played: 11,
          won: 3,
          drawn: 3,
          lost: 5,
          gf: 10,
          ga: 14,
          gd: -4,
          points: 12,
          form: ["W", "L", "L", "D"],
          next: "Mallorca",
        },
        {
          position: 14,
          club: "Almeria",
          played: 11,
          won: 3,
          drawn: 2,
          lost: 6,
          gf: 12,
          ga: 20,
          gd: -8,
          points: 11,
          form: ["L", "D", "L", "W"],
          next: "Espanyol",
        },
        {
          position: 15,
          club: "Espanyol",
          played: 11,
          won: 2,
          drawn: 4,
          lost: 5,
          gf: 10,
          ga: 15,
          gd: -5,
          points: 10,
          form: ["D", "L", "W", "L"],
          next: "Almeria",
        },
        {
          position: 16,
          club: "Cadiz",
          played: 11,
          won: 2,
          drawn: 3,
          lost: 6,
          gf: 9,
          ga: 18,
          gd: -9,
          points: 9,
          form: ["L", "L", "W", "D"],
          next: "Athletic Bilbao",
        },
        {
          position: 17,
          club: "Valencia",
          played: 11,
          won: 2,
          drawn: 3,
          lost: 6,
          gf: 8,
          ga: 19,
          gd: -11,
          points: 9,
          form: ["L", "D", "L", "W"],
          next: "Rayo Vallecano",
        },
        {
          position: 18,
          club: "Rayo Vallecano",
          played: 11,
          won: 2,
          drawn: 2,
          lost: 7,
          gf: 9,
          ga: 21,
          gd: -12,
          points: 8,
          form: ["L", "W", "L", "L"],
          next: "Valencia",
        },
        {
          position: 19,
          club: "Las Palmas",
          played: 11,
          won: 1,
          drawn: 3,
          lost: 7,
          gf: 7,
          ga: 18,
          gd: -11,
          points: 6,
          form: ["L", "L", "D", "D"],
          next: "Eibar",
        },
        {
          position: 20,
          club: "Eibar",
          played: 11,
          won: 1,
          drawn: 2,
          lost: 8,
          gf: 6,
          ga: 22,
          gd: -16,
          points: 5,
          form: ["L", "D", "L", "L"],
          next: "Las Palmas",
        },
      ],
      fixtures: [
        { match: "Alaves vs Mallorca", date: "2024-11-02" },
        { match: "Osasuna vs Valladolid", date: "2024-11-02" },
        { match: "Girona vs Leganes", date: "2024-11-03" },
        { match: "Valencia vs Real Madrid", date: "2024-11-03" },
        { match: "Atletico Madrid vs Las Palmas", date: "2024-11-03" },
        { match: "Barcelona vs Espanyol", date: "2024-11-03" },
        { match: "Sevilla vs Real Sociedad", date: "2024-11-04" },
        { match: "Athletic Club vs Real Betis", date: "2024-11-04" },
        { match: "Celta Vigo vs Getafe", date: "2024-11-05" },
      ],
    },
    {
      name: "Serie A",
      teams: [
        {
          position: 1,
          club: "Napoli",
          played: 11,
          won: 9,
          drawn: 1,
          lost: 1,
          gf: 27,
          ga: 8,
          gd: 19,
          points: 28,
          form: ["W", "W", "W", "D"],
          next: "Lazio",
        },
        {
          position: 2,
          club: "Inter Milan",
          played: 11,
          won: 8,
          drawn: 2,
          lost: 1,
          gf: 25,
          ga: 10,
          gd: 15,
          points: 26,
          form: ["W", "D", "W", "W"],
          next: "Roma",
        },
        {
          position: 3,
          club: "AC Milan",
          played: 11,
          won: 8,
          drawn: 1,
          lost: 2,
          gf: 23,
          ga: 12,
          gd: 11,
          points: 25,
          form: ["L", "W", "W", "W"],
          next: "Fiorentina",
        },
        {
          position: 4,
          club: "Juventus",
          played: 11,
          won: 7,
          drawn: 3,
          lost: 1,
          gf: 21,
          ga: 9,
          gd: 12,
          points: 24,
          form: ["W", "W", "D", "D"],
          next: "Bologna",
        },
        {
          position: 5,
          club: "Lazio",
          played: 11,
          won: 6,
          drawn: 4,
          lost: 1,
          gf: 19,
          ga: 10,
          gd: 9,
          points: 22,
          form: ["D", "W", "W", "D"],
          next: "Napoli",
        },
        {
          position: 6,
          club: "Atalanta",
          played: 11,
          won: 6,
          drawn: 3,
          lost: 2,
          gf: 20,
          ga: 12,
          gd: 8,
          points: 21,
          form: ["L", "W", "D", "W"],
          next: "Sassuolo",
        },
        {
          position: 7,
          club: "Fiorentina",
          played: 11,
          won: 5,
          drawn: 3,
          lost: 3,
          gf: 17,
          ga: 14,
          gd: 3,
          points: 18,
          form: ["D", "L", "W", "W"],
          next: "AC Milan",
        },
        {
          position: 8,
          club: "Roma",
          played: 11,
          won: 5,
          drawn: 2,
          lost: 4,
          gf: 18,
          ga: 15,
          gd: 3,
          points: 17,
          form: ["W", "W", "L", "L"],
          next: "Inter Milan",
        },
        {
          position: 9,
          club: "Torino",
          played: 11,
          won: 4,
          drawn: 3,
          lost: 4,
          gf: 15,
          ga: 14,
          gd: 1,
          points: 15,
          form: ["D", "L", "W", "D"],
          next: "Udinese",
        },
        {
          position: 10,
          club: "Bologna",
          played: 11,
          won: 4,
          drawn: 3,
          lost: 4,
          gf: 13,
          ga: 14,
          gd: -1,
          points: 15,
          form: ["L", "W", "D", "W"],
          next: "Juventus",
        },
        {
          position: 11,
          club: "Sassuolo",
          played: 11,
          won: 4,
          drawn: 3,
          lost: 4,
          gf: 12,
          ga: 16,
          gd: -4,
          points: 15,
          form: ["L", "W", "D", "L"],
          next: "Atalanta",
        },
        {
          position: 12,
          club: "Udinese",
          played: 11,
          won: 3,
          drawn: 4,
          lost: 4,
          gf: 11,
          ga: 15,
          gd: -4,
          points: 13,
          form: ["W", "L", "D", "L"],
          next: "Torino",
        },
        {
          position: 13,
          club: "Empoli",
          played: 11,
          won: 3,
          drawn: 3,
          lost: 5,
          gf: 10,
          ga: 14,
          gd: -4,
          points: 12,
          form: ["L", "W", "D", "L"],
          next: "Spezia",
        },
        {
          position: 14,
          club: "Spezia",
          played: 11,
          won: 3,
          drawn: 2,
          lost: 6,
          gf: 12,
          ga: 18,
          gd: -6,
          points: 11,
          form: ["W", "D", "L", "L"],
          next: "Empoli",
        },
        {
          position: 15,
          club: "Cagliari",
          played: 11,
          won: 3,
          drawn: 2,
          lost: 6,
          gf: 10,
          ga: 17,
          gd: -7,
          points: 11,
          form: ["D", "L", "L", "W"],
          next: "Verona",
        },
        {
          position: 16,
          club: "Verona",
          played: 11,
          won: 2,
          drawn: 3,
          lost: 6,
          gf: 9,
          ga: 18,
          gd: -9,
          points: 9,
          form: ["L", "W", "L", "D"],
          next: "Cagliari",
        },
        {
          position: 17,
          club: "Lecce",
          played: 11,
          won: 2,
          drawn: 3,
          lost: 6,
          gf: 8,
          ga: 19,
          gd: -11,
          points: 9,
          form: ["D", "L", "L", "W"],
          next: "Salernitana",
        },
        {
          position: 18,
          club: "Salernitana",
          played: 11,
          won: 2,
          drawn: 2,
          lost: 7,
          gf: 7,
          ga: 20,
          gd: -13,
          points: 8,
          form: ["L", "W", "L", "L"],
          next: "Lecce",
        },
        {
          position: 19,
          club: "Genoa",
          played: 11,
          won: 1,
          drawn: 3,
          lost: 7,
          gf: 6,
          ga: 21,
          gd: -15,
          points: 6,
          form: ["L", "L", "D", "L"],
          next: "Monza",
        },
        {
          position: 20,
          club: "Monza",
          played: 11,
          won: 1,
          drawn: 2,
          lost: 8,
          gf: 5,
          ga: 23,
          gd: -18,
          points: 5,
          form: ["L", "L", "L", "D"],
          next: "Genoa",
        },
      ],
      fixtures: [
        { match: "Genoa vs Como", date: "2024-11-08" },
        { match: "Lecce vs Empoli", date: "2024-11-09" },
        { match: "Venesia vs Parma", date: "2024-11-09" },
        { match: "Cagliari vs Milan", date: "2024-11-10" },
        { match: "Juventus vs Torino", date: "2024-11-10" },
        { match: "Atalanta vs Udinese", date: "2024-11-10" },
        { match: "Fiorentina vs Verona", date: "2024-11-10" },
        { match: "Roma vs Bologna", date: "2024-11-10" },
        { match: "Monza vs Lazio", date: "2024-11-11" },
        { match: "Inter vs Napoli", date: "2024-11-11" },
      ],
    },
    {
      name: "Champions League",
      teams: [
        {
          position: 1,
          club: "Liverpool",
          played: 4,
          won: 4,
          drawn: 0,
          lost: 0,
          gf: 10,
          ga: 1,
          gd: 9,
          points: 12,
          form: ["W", "W", "W", "W"],
          next: "TBD",
          lastMatches: [
            { match: "Liverpool vs. Manchester City", result: "2-2" },
            { match: "Liverpool vs. Chelsea", result: "1-0" },
          ],
          upcomingMatches: [
            { match: "Liverpool vs. Wolverhampton Wanderers" },
            { match: "Liverpool vs. Everton" },
          ],
          weekendMatch: {
            match: "Liverpool vs. Newcastle United",
            day: "Saturday",
          },
        },
        {
          position: 2,
          club: "Sporting CP",
          played: 4,
          won: 3,
          drawn: 1,
          lost: 0,
          gf: 9,
          ga: 2,
          gd: 7,
          points: 10,
          form: ["W", "D", "W", "W"],
          next: "TBD",
          lastMatches: [
            { match: "Sporting CP vs. Benfica", result: "1-0" },
            { match: "Sporting CP vs. Porto", result: "2-1" },
          ],
          upcomingMatches: [
            { match: "Sporting CP vs. Braga" },
            { match: "Sporting CP vs. Maritimo" },
          ],
          weekendMatch: { match: "Sporting CP vs. Moreirense", day: "Sunday" },
        },
        {
          position: 3,
          club: "Monaco",
          played: 4,
          won: 3,
          drawn: 1,
          lost: 0,
          gf: 10,
          ga: 4,
          gd: 6,
          points: 10,
          form: ["W", "W", "D", "W"],
          next: "TBD",
          lastMatches: [
            { match: "Monaco vs. Nice", result: "3-1" },
            { match: "Monaco vs. PSG", result: "2-2" },
          ],
          upcomingMatches: [
            { match: "Monaco vs. Lyon" },
            { match: "Monaco vs. Nantes" },
          ],
          weekendMatch: { match: "Monaco vs. Marseille", day: "Saturday" },
        },
        {
          position: 4,
          club: "Brest",
          played: 4,
          won: 3,
          drawn: 1,
          lost: 0,
          gf: 9,
          ga: 3,
          gd: 6,
          points: 10,
          form: ["W", "W", "D", "W"],
          next: "TBD",
          lastMatches: [
            { match: "Brest vs. Lille", result: "1-0" },
            { match: "Brest vs. Rennes", result: "2-1" },
          ],
          upcomingMatches: [
            { match: "Brest vs. Strasbourg" },
            { match: "Brest vs. Montpellier" },
          ],
          weekendMatch: { match: "Brest vs. Nantes", day: "Sunday" },
        },
        {
          position: 5,
          club: "Inter",
          played: 4,
          won: 3,
          drawn: 1,
          lost: 0,
          gf: 6,
          ga: 0,
          gd: 6,
          points: 10,
          form: ["W", "W", "D", "W"],
          next: "TBD",
          lastMatches: [
            { match: "Inter vs. Lazio", result: "3-0" },
            { match: "Inter vs. Genoa", result: "2-0" },
          ],
          upcomingMatches: [
            { match: "Inter vs. Atalanta" },
            { match: "Inter vs. Sampdoria" },
          ],
          weekendMatch: { match: "Inter vs. Cagliari", day: "Saturday" },
        },
        {
          position: 6,
          club: "Barcelona",
          played: 4,
          won: 3,
          drawn: 0,
          lost: 1,
          gf: 15,
          ga: 5,
          gd: 10,
          points: 9,
          form: ["W", "L", "W", "W"],
          next: "TBD",
          lastMatches: [
            { match: "Barcelona vs. Real Madrid", result: "3-1" },
            { match: "Barcelona vs. Sevilla", result: "4-0" },
          ],
          upcomingMatches: [
            { match: "Barcelona vs. Valencia" },
            { match: "Barcelona vs. Real Betis" },
          ],
          weekendMatch: {
            match: "Barcelona vs. Atletico Madrid",
            day: "Saturday",
          },
        },
        {
          position: 7,
          club: "Dortmund",
          played: 4,
          won: 3,
          drawn: 0,
          lost: 1,
          gf: 13,
          ga: 5,
          gd: 8,
          points: 9,
          form: ["W", "W", "L", "W"],
          next: "TBD",
          lastMatches: [
            { match: "Dortmund vs. Bayern Munich", result: "4-2" },
            { match: "Dortmund vs. Stuttgart", result: "3-1" },
          ],
          upcomingMatches: [
            { match: "Dortmund vs. Schalke" },
            { match: "Dortmund vs. Bayer Leverkusen" },
          ],
          weekendMatch: { match: "Dortmund vs. Mainz", day: "Saturday" },
        },
        {
          position: 8,
          club: "Aston Villa",
          played: 4,
          won: 3,
          drawn: 0,
          lost: 1,
          gf: 6,
          ga: 1,
          gd: 5,
          points: 9,
          form: ["W", "W", "L", "W"],
          next: "TBD",
          lastMatches: [
            { match: "Aston Villa vs. Everton", result: "2-0" },
            { match: "Aston Villa vs. Leicester", result: "3-1" },
          ],
          upcomingMatches: [
            { match: "Aston Villa vs. Burnley" },
            { match: "Aston Villa vs. Fulham" },
          ],
          weekendMatch: {
            match: "Aston Villa vs. Wolverhampton",
            day: "Saturday",
          },
        },
        {
          position: 9,
          club: "Atalanta",
          played: 4,
          won: 2,
          drawn: 2,
          lost: 0,
          gf: 5,
          ga: 0,
          gd: 5,
          points: 8,
          form: ["D", "W", "W", "D"],
          next: "TBD",
          lastMatches: [
            { match: "Atalanta vs. Bologna", result: "1-0" },
            { match: "Atalanta vs. Sassuolo", result: "2-1" },
          ],
          upcomingMatches: [
            { match: "Atalanta vs. Cagliari" },
            { match: "Atalanta vs. Napoli" },
          ],
          weekendMatch: { match: "Atalanta vs. Torino", day: "Sunday" },
        },
        {
          position: 10,
          club: "Man City",
          played: 4,
          won: 2,
          drawn: 1,
          lost: 1,
          gf: 10,
          ga: 4,
          gd: 6,
          points: 7,
          form: ["W", "L", "D", "W"],
          next: "TBD",
          lastMatches: [
            { match: "Man City vs. Chelsea", result: "2-1" },
            { match: "Man City vs. Arsenal", result: "1-3" },
          ],
          upcomingMatches: [
            { match: "Man City vs. Liverpool" },
            { match: "Man City vs. Leicester" },
          ],
          weekendMatch: { match: "Man City vs. Brighton", day: "Saturday" },
        },
        // Add placeholder data for teams 11-36...
      ],
      fixtures: [
        { match: "Barcelona vs Brest", date: "2024-11-27" },
        { match: "Inter vs RB Leipzig", date: "2024-11-27" },
        { match: "Sporting vs Arsenal", date: "2024-11-27" },
        { match: "Monaco vs Benfica", date: "2024-11-28" },
        { match: "Liverpool vs Real Madrid", date: "2024-11-28" },
        { match: "Dinamo Zagreb vs Dortmund", date: "2024-11-28" },
        { match: "Aston Villa vs Juventus", date: "2024-11-28" },
      ],
    },
  ];

  const [selectedLeagueIndex, setSelectedLeagueIndex] = useState<number | null>(
    null
  );
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  const selectLeague = (index: number) => {
    setSelectedLeagueIndex(selectedLeagueIndex === index ? null : index);
    setSelectedTeam(null); // Reset selected team when changing the league
  };

  const selectTeam = (team: string) => {
    setSelectedTeam(selectedTeam === team ? null : team); // Toggle selected team
  };

  return (
    <div className={`container ${styles.homeContainer}`}>
      <h2>FootLive</h2>
      <p></p>

      <div className={styles.leagueContainer}>
        <div className={styles.sidebar}>
          {leagues.map((league, index) => (
            <h3
              key={index}
              className={styles.leagueTitle}
              onClick={() => selectLeague(index)}
            >
              {league.name}
            </h3>
          ))}

          {/* New section for displaying team details */}
          {selectedLeagueIndex !== null && (
            <div className={styles.teamDetails}>
              <h4>Select a Team for Match Details</h4>
              {leagues[selectedLeagueIndex].teams.map((team) => (
                <p
                  key={team.position}
                  className={styles.teamSelect}
                  onClick={() => selectTeam(team.club)}
                >
                  {team.club}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className={styles.tableContainer}>
          {selectedLeagueIndex !== null && (
            <>
              <h2>{leagues[selectedLeagueIndex].name} Table</h2>
              <table>
                <thead>
                  <tr>
                    <th>Position</th>
                    <th>Club</th>
                    <th>Played</th>
                    <th>Won</th>
                    <th>Drawn</th>
                    <th>Lost</th>
                    <th>GF</th>
                    <th>GA</th>
                    <th>GD</th>
                    <th>Points</th>
                    <th>Form</th>
                    <th>Next</th>
                  </tr>
                </thead>
                <tbody>
                  {leagues[selectedLeagueIndex].teams.map((team) => (
                    <tr key={team.position}>
                      <td>{team.position}</td>
                      <td>{team.club}</td>
                      <td>{team.played}</td>
                      <td>{team.won}</td>
                      <td>{team.drawn}</td>
                      <td>{team.lost}</td>
                      <td>{team.gf}</td>
                      <td>{team.ga}</td>
                      <td>{team.gd}</td>
                      <td>{team.points}</td>
                      <td>
                        {team.form.map((form, index) => (
                          <span
                            key={index}
                            className={`${styles.form} ${form.toLowerCase()}`}
                          >
                            {form}
                          </span>
                        ))}
                      </td>
                      <td className={styles.next}>{team.next}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h2>Fixtures</h2>
              <ul>
                {leagues[selectedLeagueIndex].fixtures.map((fixture, index) => (
                  <li key={index}>
                    {fixture.match} on{" "}
                    {new Date(fixture.date).toLocaleDateString()}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      {/* Displaying Match Details for Selected Team */}
      {selectedTeam && selectedLeagueIndex !== null && (
        <div className={styles.matchDetails}>
          {leagues[selectedLeagueIndex].teams.map((team) => {
            if (team.club === selectedTeam) {
              return (
                <div key={team.position}>
                  <h4>{team.club} - Match Details</h4>

                  <p>
                    <strong>Last 2 Matches:</strong>
                  </p>
                  <ul>
                    {team.lastMatches && team.lastMatches.length > 0 ? (
                      team.lastMatches.map((match, index) => (
                        <li key={index}>
                          {match.match} (result: {match.result})
                        </li>
                      ))
                    ) : (
                      <li>No last matches available.</li>
                    )}
                  </ul>

                  <p>
                    <strong>Next 2 Upcoming Matches:</strong>
                  </p>
                  <ul>
                    {team.upcomingMatches && team.upcomingMatches.length > 0 ? (
                      team.upcomingMatches.map((match, index) => (
                        <li key={index}>{match.match}</li>
                      ))
                    ) : (
                      <li>No upcoming matches available.</li>
                    )}
                  </ul>

                  <p>
                    <strong>Match This Weekend:</strong>
                  </p>
                  {team.weekendMatch ? (
                    <p>
                      {team.weekendMatch.match} (on {team.weekendMatch.day})
                    </p>
                  ) : (
                    <p>No match this weekend.</p>
                  )}
                </div>
              );
            }
            return null; // Skip if it's not the selected team
          })}
        </div>
      )}
    </div>
  );
};

export default Home;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Home: React.FC = () => {
//   const [fixtures, setFixtures] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     // Function to fetch data from the API
//     const fetchHeadToHead = async () => {
//       try {
//         const response = await axios.get(
//           "https://api-football-v1.p.rapidapi.com/v3/fixtures/headtohead?h2h=33-34",
//           //so the 33-34 at the end of the api url is for the team id, where the team id 33 is for Manchester United
//           {
//             headers: {
//               "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//               "x-rapidapi-key":
//                 "f3100dc649msh171183fec421b41p1aa1e9jsnc33840fe3e6c",
//             },
//           }
//         );
//         setFixtures(response.data.response); // Assuming the data is inside 'response'
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch data");
//         setLoading(false);
//       }
//     };

//     fetchHeadToHead();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="container mt-5">
//       <h2>Welcome to FootLive</h2>
//       <p>
//         Your one-stop destination for live football updates and detailed
//         statistics.
//       </p>

//       <h3>Head-to-Head Fixtures</h3>
//       <ul>
//         {fixtures.map((fixture) => (
//           <li key={fixture.fixture.id}>
//             {fixture.teams.home.name} vs {fixture.teams.away.name} on{" "}
//             {new Date(fixture.fixture.date).toLocaleDateString()}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home;

//so the line is from 17-77 only

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Home: React.FC = () => {
//   const [fixtures, setFixtures] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     // Function to fetch fixtures by date from the API
//     const fetchFixtures = async () => {
//       try {
//         const response = await axios.get(
//           "https://api-football-v1.p.rapidapi.com/v3/fixtures",
//           {
//             headers: {
//               "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//               "x-rapidapi-key":
//                 "f3100dc649msh171183fec421b41p1aa1e9jsnc33840fe3e6c",
//             },
//             params: {
//               date: "2021-01-29", // Change the date dynamically if needed
//             },
//           }
//         );
//         console.log(response.data.response); // Log the API response for debugging
//         setFixtures(response.data.response); // Store the fixture data in state
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching fixtures:", err); // Log the error for debugging
//         setError("Failed to fetch fixtures");
//         setLoading(false);
//       }
//     };

//     fetchFixtures();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;
//   if (fixtures.length === 0) return <p>No fixtures available for this date.</p>; // Handle empty fixtures

//   return (
//     <div className="container mt-5">
//       <h2>Football Fixtures on 2021-01-29</h2>
//       <ul>
//         {fixtures.map((fixture) => (
//           <li key={fixture.fixture.id}>
//             <div>
//               <h3>
//                 {fixture.teams.home.name} vs {fixture.teams.away.name}
//               </h3>
//               <p>
//                 Date: {new Date(fixture.fixture.date).toLocaleDateString()} |
//                 Time:{" "}
//                 {new Date(
//                   fixture.fixture.timestamp * 1000
//                 ).toLocaleTimeString()}{" "}
//                 ({fixture.fixture.timezone})
//               </p>
//               <p>
//                 Venue: {fixture.venue.name}, {fixture.venue.city}
//               </p>
//               <p>
//                 Score: {fixture.goals.home} - {fixture.goals.away}
//               </p>
//               <p>Status: {fixture.status.long}</p>
//             </div>
//             <hr />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home;
